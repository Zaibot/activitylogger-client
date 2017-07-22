import Config from '.';
import { Action, isType } from '../actions';
import * as actions from '../actions';
import { takeEvery } from 'redux-saga';
import * as saga from 'redux-saga/effects';
import os from 'os';
import uuid from 'uuid';
import 'electron';
import { dialog } from 'electron';

export default function* () {
  yield saga.call(load);
  yield takeEvery([
    actions.CHANGED_PUBLICKEY.type,
    actions.CHANGED_PRIVATEKEY.type,
    actions.CHANGED_TIMELINE.type,
    actions.CHANGED_SOURCE.type,
    actions.CHANGED_SERVER.type,
  ], monitor);
  yield takeEvery([
    actions.RESET_SERVER.type,
    actions.GENERATE_TIMELINE.type,
    actions.GENERATE_SOURCE.type,
  ], generate);
  yield takeEvery([actions.EXPORT_KEYPAIR.type,], exportKeypair);
}
function* load() {
  const privateKey = yield Config.getPrivateKey();
  const publicKey = yield Config.getPublicKey();
  const timelineId = yield Config.getTimelineId();
  const sourceId = yield Config.getSourceId();
  const serverUrl = yield Config.getServerUrl();

  yield saga.put(actions.CHANGED_PUBLICKEY({ key: publicKey }));
  yield saga.put(actions.CHANGED_PRIVATEKEY({ key: privateKey }));
  yield saga.put(actions.CHANGED_TIMELINE({ value: timelineId }));
  yield saga.put(actions.CHANGED_SOURCE({ value: sourceId }));
  yield saga.put(actions.CHANGED_SERVER({ value: serverUrl }));
}

function* monitor(action: Action<any>) {
  if (isType(actions.CHANGED_PUBLICKEY, action)) {
    yield saga.call(() => Config.setPublicKey(action.payload.key));
  }
  if (isType(actions.CHANGED_PRIVATEKEY, action)) {
    yield saga.call(() => Config.setPrivateKey(action.payload.key));
  }
  if (isType(actions.CHANGED_TIMELINE, action)) {
    yield saga.call(() => Config.setTimelineId(action.payload.value));
  }
  if (isType(actions.CHANGED_SOURCE, action)) {
    yield saga.call(() => Config.setSourceId(action.payload.value));
  }
  if (isType(actions.CHANGED_SERVER, action)) {
    yield saga.call(() => Config.setServerUrl(action.payload.value));
  }
}

function* generate(action: Action<any>) {
  if (isType(actions.RESET_SERVER, action)) {
    const value = `https://al.zaibot.net`;
    yield saga.put(actions.CHANGED_SERVER({ value }));
  }
  if (isType(actions.GENERATE_SOURCE, action)) {
    const value = os.hostname();
    yield saga.put(actions.CHANGED_SOURCE({ value }));
  }
  if (isType(actions.GENERATE_TIMELINE, action)) {
    const value = uuid.v4();
    yield saga.put(actions.CHANGED_TIMELINE({ value }));
  }
}
import fs from 'async-file';
import path from 'path';
function* exportKeypair(action: Action<any>) {
  if (isType(actions.EXPORT_KEYPAIR, action)) {
    const { privateKey, publicKey } = action.payload;
    yield saga.put(actions.WINDOW_HIDE({}));
    const paths = yield showOpenDialog({
      properties: ['openDirectory', 'createDirectory'],
      title: `Export Activity Logger Keypair`,
      filters: [{ name: 'Key file', extensions: ['key'] }]
    });
    if (paths) {
      for (const p of paths) {
        yield fs.writeFile(path.join(p, `ActivityLogger.public.key`), publicKey);
        yield fs.writeFile(path.join(p, `ActivityLogger.key`), privateKey);
      }
    }
    yield saga.put(actions.WINDOW_SHOW({}));
    yield saga.put(actions.SELECT_VIEW({ view: `Auth` }));
  }
}

function showOpenDialog(options: any): Promise<string[]> {
  return new Promise((resolve, reject) => {
    dialog.showOpenDialog(options, (paths: string[]) => {
      resolve(paths);
    });
  });
}
