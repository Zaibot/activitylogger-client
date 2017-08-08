import fetch from 'node-fetch';
import { takeLatest } from 'redux-saga';
import * as saga from 'redux-saga/effects';
import { activitylogger } from '../../protocol/dist/recording';
import * as actions from '../actions';
import { Folder, Interaction, Meeting, Window } from '../buffer';
import { State } from '../buffer/reducer';
import { Report } from '../errors/index';
import Signing from '../signing';
import selectors from '../store/selectors';

function* tick(callback: saga.CallEffectFn<any>) {
  yield saga.fork(function*() {
    for (; ; ) {
      yield saga.take(actions.INTERVAL_TICK.type);
      yield saga.call(callback);
    }
  });
}

export default function*() {
  yield takeLatest(actions.CHANGED_SERVER.type, discover);
  yield saga.call(tick, sync);
}

function* discover() {
  try {
    yield saga.put(actions.CONNECTION_OFFLINE({}));
    const { serverUrl } = yield saga.select(selectors.config);
    yield saga.put(actions.CONNECTION_BUSY({}));
    const autoconfigRequest = yield fetch(`${serverUrl}/api/v1/autoconfig`);
    const autoconfig = yield autoconfigRequest.json();
    const dashboardUrl = autoconfig.address.dashboard;
    const logUrl = autoconfig.address.log;
    const aggregatorUrl = autoconfig.address.aggregator;
    const electronUrl = autoconfig.address.electron;
    yield saga.put(actions.CONNECTION_ONLINE({ dashboardUrl, logUrl, aggregatorUrl, electronUrl }));
  } catch (err) {
    Report.error(err);
    yield saga.put(actions.CONNECTION_OFFLINE({}));
  }
}

function* sync() {
  try {
    const { online } = yield saga.select(selectors.client);
    if (!online) { return; }
    const { timelineId, sourceId, privateKey, publicKey } = yield saga.select(selectors.config);
    if (!timelineId || !sourceId || !privateKey || !publicKey) { return; }
    const buffer: State = yield saga.select(selectors.buffer);
    const tasks = buffer.tasks.filter((x) => x.status !== `sent` && x.finishTime < Date.now() - 30000);
    const task = tasks.reduce((state, cur) => cur.finishTime < state.finishTime ? cur : state, tasks[0]);
    if (!task) { return; }
    if (task.type === `window`) {
      yield saga.call(postWindow, task.id, task.data);
    }
    if (task.type === `interaction`) {
      yield saga.call(postInteraction, task.id, task.data);
    }
    if (task.type === `folder`) {
      yield saga.call(postFolder, task.id, task.data);
    }
    if (task.type === `timelineCreate`) {
      yield saga.call(postTimelineCreate, task.id, task.data);
    }
    if (task.type === `meeting`) {
      yield saga.call(postMeeting, task.id, task.data);
    }
  } catch (err) {
    console.error(`sync`, err);
  }
}

function* postTimelineCreate(id: string, interaction: any) {
  const { timelineId, publicKey } = interaction;
  try {
    yield saga.put(actions.BUFFER_BUSY({ id }));
    const { sourceId, privateKey, publicKey: publicKeySignature } = yield saga.select(selectors.config);
    const msg = { timelineId, publicKey, sourceId };
    const buffer = new Buffer(activitylogger.TimelineCreate.encode(msg).finish());
    const body = signed(privateKey, publicKeySignature, buffer);
    const { logUrl } = yield saga.select(selectors.client);
    const response = yield fetch(`${logUrl}/api/v1/log/create`,
      {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      });
    if (!response.ok) {
      throw Error(`submission error: ${response.status} ${response.statusText}`);
    }
    yield saga.put(actions.BUFFER_SUCCESS({ id, finishTime: Date.now() }));
  } catch (ex) {
    console.log(`[TimelineCreate]`, ex.message);
    yield saga.put(actions.BUFFER_ERROR({ id, finishTime: Date.now() }));
  }
}

function* postInteraction(id: string, interaction: Interaction) {
  const { timeStart, timeEnd, keypresses, mousepresses } = interaction;
  try {
    yield saga.put(actions.BUFFER_BUSY({ id }));
    const { timelineId, sourceId, privateKey, publicKey } = yield saga.select(selectors.config);
    const msg: activitylogger.IInteraction = { timelineId, sourceId, timeStart, timeEnd, keypresses, mousepresses };
    const buffer = new Buffer(activitylogger.Interaction.encode(msg).finish());
    const body = signed(privateKey, publicKey, buffer);
    const { logUrl } = yield saga.select(selectors.client);
    const response = yield fetch(`${logUrl}/api/v1/log/interaction/${timelineId}`,
      {
        method: 'POST',
        body,
        headers: {
          'Authentication': `Bearer ${Buffer.from(publicKey).toString('base64')}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      });
    if (!response.ok) {
      throw Error(`submission error: ${response.status} ${response.statusText}`);
    }
    yield saga.put(actions.BUFFER_SUCCESS({ id, finishTime: Date.now() }));
  } catch (ex) {
    console.log(`[Interaction]`, ex.message);
    yield saga.put(actions.BUFFER_ERROR({ id, finishTime: Date.now() }));
  }
}

function* postWindow(id: string, window: Window) {
  const { timeStart, timeEnd, windows: titles } = window;
  try {
    yield saga.put(actions.BUFFER_BUSY({ id }));
    const { timelineId, sourceId, privateKey, publicKey } = yield saga.select(selectors.config);
    const msg: activitylogger.IWindowActivity = { timelineId, sourceId, timeStart, timeEnd, titles };
    const buffer = new Buffer(activitylogger.WindowActivity.encode(msg).finish());
    const body = signed(privateKey, publicKey, buffer);
    const { logUrl } = yield saga.select(selectors.client);
    const response = yield fetch(`${logUrl}/api/v1/log/window/${timelineId}`,
      {
        method: 'POST',
        body,
        headers: {
          'Authentication': `Bearer ${Buffer.from(publicKey).toString('base64')}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      });
    if (!response.ok) {
      throw Error(`submission error: ${response.status} ${response.statusText}`);
    }
    yield saga.put(actions.BUFFER_SUCCESS({ id, finishTime: Date.now() }));
  } catch (ex) {
    console.log(`[Window]`, ex.message);
    yield saga.put(actions.BUFFER_ERROR({ id, finishTime: Date.now() }));
  }
}

function* postFolder(id: string, window: Folder) {
  const { timeStart, timeEnd, folders: paths } = window;
  try {
    yield saga.put(actions.BUFFER_BUSY({ id }));
    const { timelineId, sourceId, privateKey, publicKey } = yield saga.select(selectors.config);
    const msg: activitylogger.IFolderActivity = { timelineId, sourceId, timeStart, timeEnd, paths };
    const buffer = new Buffer(activitylogger.FolderActivity.encode(msg).finish());
    const body = signed(privateKey, publicKey, buffer);
    const { logUrl } = yield saga.select(selectors.client);
    const response = yield fetch(`${logUrl}/api/v1/log/folder/${timelineId}`,
      {
        method: 'POST',
        body,
        headers: {
          'Authentication': `Bearer ${Buffer.from(publicKey).toString('base64')}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      });
    if (!response.ok) {
      throw Error(`submission error: ${response.status} ${response.statusText}`);
    }
    yield saga.put(actions.BUFFER_SUCCESS({ id, finishTime: Date.now() }));
  } catch (ex) {
    console.log(`[Folder]`, ex.message);
    yield saga.put(actions.BUFFER_ERROR({ id, finishTime: Date.now() }));
  }
}

function* postMeeting(id: string, window: Meeting) {
  const { timeStart, timeEnd, title, description } = window;
  try {
    yield saga.put(actions.BUFFER_BUSY({ id }));
    const { timelineId, sourceId, privateKey, publicKey } = yield saga.select(selectors.config);
    const msg: activitylogger.IMeeting = { timelineId, sourceId, timeStart, timeEnd, description: `${title}\n${description}` };
    const buffer = new Buffer(activitylogger.FolderActivity.encode(msg).finish());
    const body = signed(privateKey, publicKey, buffer);
    const { logUrl } = yield saga.select(selectors.client);
    const response = yield fetch(`${logUrl}/api/v1/log/meeting/${timelineId}`,
      {
        method: 'POST',
        body,
        headers: {
          'Authentication': `Bearer ${Buffer.from(publicKey).toString('base64')}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      });
    if (!response.ok) {
      throw Error(`submission error: ${response.status} ${response.statusText}`);
    }
    yield saga.put(actions.BUFFER_SUCCESS({ id, finishTime: Date.now() }));
  } catch (ex) {
    console.log(`[Meeting]`, ex.message);
    yield saga.put(actions.BUFFER_ERROR({ id, finishTime: Date.now() }));
  }
}

function signed(privateKey: string, publicKey: string, buffer: Buffer) {
  const signature = Signing.sign(privateKey, buffer);
  const data = buffer.toString('base64');
  const textPublicKey = publicKey;
  return JSON.stringify({ data, signature, publicKey: textPublicKey });
}
