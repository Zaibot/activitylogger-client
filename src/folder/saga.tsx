import { dialog } from 'electron';
import { takeEvery } from 'redux-saga';
import * as saga from 'redux-saga/effects';
import uuid from 'uuid';
import { Action, isType } from '../actions';
import * as actions from '../actions';
import Database, { IFolderItem } from './database';

export default function*() {
  yield saga.call(loadFolders);
  yield takeEvery([actions.MONITORFOLDER_INIT.type, actions.MONITORFOLDER_BROWSE.type], selectFolder);
  yield takeEvery([actions.MONITORFOLDER_COMMIT.type], persistFolder);
}

function* loadFolders() {
  const items: IFolderItem[] = yield Database.getAll();
  yield saga.put(actions.MONITORFOLDER_LOAD({ folders: items }));
}

function* persistFolder(action: Action<any>) {
  if (isType(actions.MONITORFOLDER_COMMIT, action)) {
    const id = uuid.v4();
    const creationTime = Date.now();
    const path = action.payload.folder;
    yield Database.save({ id, creationTime, path });
    yield saga.call(loadFolders);
  }
}

function* selectFolder() {
  yield saga.put(actions.WINDOW_HIDE({}));
  const paths = yield showOpenDialog({ properties: ['openDirectory'], title: `Activity Logger - Monitor Folder` });
  if (paths) {
    for (const p of paths) {
      yield saga.put(actions.MONITORFOLDER_CHANGED_FOLDER({ value: p }));
    }
  }
  yield saga.put(actions.WINDOW_SHOW({}));
}

function showOpenDialog(options: any): Promise<string[]> {
  return new Promise((resolve, reject) => {
    dialog.showOpenDialog(options, (paths: string[]) => {
      resolve(paths);
    });
  });
}
