import { delay, takeEvery } from 'redux-saga';
import * as saga from 'redux-saga/effects';
import selectors from '../store/selectors';
import * as actions from '../actions';
import { isType, Action } from '../actions';
import uuid from 'uuid';
import Meeting from './Meeting';
import Database, { IBufferItem } from './database';

export default function* () {
  yield saga.call(reloadBufferItem);
  yield takeEvery([actions.INTERVAL_TICK.type, actions.KEY_PRESSED.type, actions.MOUSE_PRESSED.type, actions.TRIGGERED_WINDOW.type, actions.TRIGGERED_FOLDER.type], checkRecording);
  yield takeEvery([actions.CHANGED_TIMELINE.type], timelineCreate);
  yield takeEvery([actions.USERRETURNED_COMMIT.type], meeting);
  yield takeEvery([actions.INVITE_COMMIT.type], invite);
  yield takeEvery([actions.BUFFER_QUEUE.type, actions.BUFFER_SUCCESS.type], persistBufferItem);
  yield saga.fork(cleanup);
}

function* reloadBufferItem() {
  const items: IBufferItem[] = yield Database.getAll();
  for (const { id, type, creationTime, data } of items) {
    yield saga.put(actions.BUFFER_QUEUE({ id, type, creationTime, data }));
  }
}

function* persistBufferItem(action: Action<any>) {
  if (isType(actions.BUFFER_QUEUE, action)) {
    yield Database.save(action.payload);
  }
  if (isType(actions.BUFFER_SUCCESS, action)) {
    yield Database.remove(action.payload);
  }
}

function* cleanup() {
  for (; ;) {
    const time = yield saga.take(actions.INTERVAL_TICK.type);
    if (isType(actions.INTERVAL_TICK, time)) {
      yield saga.put(actions.CLEAN_BUFFER({ currentTime: time.payload.time }))
    }
    yield delay(5000);
  }
}

function* timelineCreate(action: Action<any>) {
  if (isType(actions.CHANGED_TIMELINE, action)) {
    const { publicKey } = yield saga.select(selectors.config);
    const id = uuid.v4();
    const type = `timelineCreate`;
    const creationTime = Date.now();
    const data = { timelineId: action.payload.value, publicKey };
    yield saga.put(actions.BUFFER_QUEUE({ id, type, creationTime, data }));
  }
}

function* meeting(action: Action<any>) {
  if (isType(actions.USERRETURNED_COMMIT, action)) {
    const { publicKey } = yield saga.select(selectors.config);
    const { timeStart, timeEnd, title, description } = action.payload;
    const id = uuid.v4();
    const type = `meeting`;
    const creationTime = Date.now();
    const data: Meeting = new Meeting(timeStart, timeEnd, title, description);
    yield saga.put(actions.BUFFER_QUEUE({ id, type, creationTime, data }));
  }
}

function* invite(action: Action<any>) {
  if (isType(actions.INVITE_COMMIT, action)) {
    const { timelineId, publicKey } = action.payload;
    const id = uuid.v4();
    const type = `timelineCreate`;
    const creationTime = Date.now();
    const data = { timelineId, publicKey };
    yield saga.put(actions.BUFFER_QUEUE({ id, type, creationTime, data }));
  }
}

function* checkRecording(action: Action<any>) {
  const filled = yield saga.select(selectors.isRecordingFull);
  const appTime = yield saga.select(selectors.appTime);
  const { maxDuration, maxWindows, maxFolders, maxKeyPresses, maxMousePresses } = yield saga.select(selectors.config);
  const { timeStart, windows, folders, keypresses, mousepresses } = yield saga.select(selectors.recording);
  const windowCorrection = isType(actions.INTERVAL_TICK, action) || isType(actions.TRIGGERED_WINDOW, action) ? 1 : 0;
  const folderCorrection = isType(actions.INTERVAL_TICK, action) || isType(actions.TRIGGERED_FOLDER, action) ? 1 : 0;
  const full = filled
    || windows.length + windowCorrection > maxWindows
    || folders.length + folderCorrection > maxFolders
    || keypresses >= maxKeyPresses
    || mousepresses >= maxMousePresses;
  if (full) {
    yield saga.call(commitRecording);
  }
}

function* commitRecording() {
  const { maxDuration, maxWindows, maxFolders, maxKeyPresses, maxMousePresses } = yield saga.select(selectors.config);
  const { timeStart, windows, folders, keypresses, mousepresses } = yield saga.select(selectors.recording);
  const timeEnd = Date.now();
  yield saga.put(actions.RESET_RECORDING({}));
  if (windows.length) {
    const id = uuid.v4();
    const type = `window`;
    const creationTime = Date.now();
    const data = { timeStart, timeEnd, windows };
    yield saga.put(actions.BUFFER_QUEUE({ id, type, creationTime, data }));
  }
  if (folders.length) {
    const id = uuid.v4();
    const type = `folder`;
    const creationTime = Date.now();
    const data = { timeStart, timeEnd, folders };
    yield saga.put(actions.BUFFER_QUEUE({ id, type, creationTime, data }));
  }
  if (keypresses || mousepresses) {
    const id = uuid.v4();
    const type = `interaction`;
    const creationTime = Date.now();
    const data = { timeStart, timeEnd, keypresses, mousepresses };
    yield saga.put(actions.BUFFER_QUEUE({ id, type, creationTime, data }));
  }
}
