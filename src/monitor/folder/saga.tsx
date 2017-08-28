import * as fs from 'fs';
import * as path from 'path';
import { eventChannel, Task } from 'redux-saga';
import * as saga from 'redux-saga/effects';
import * as actions from '../../actions';
import { Report } from '../../errors';
import * as safe from '../../helpers';
import selectors from '../../store/selectors';
import Git from './git';

export interface IActiveWindow {
  app: string;
  title: string;
}

export default function* () {
  yield safe.catchForkForever(monitorFolders);
}

function* monitorFolders() {
  let tasks: Task[] = [];
  for (; ;) {
    const { folders } = yield saga.select(selectors.folder);
    if (tasks.length) {
      yield saga.cancel(...tasks);
    }
    console.log(`[Monitor.Folder] ${folders.length} folders`);
    tasks = [];
    for (const folder of folders) {
      tasks.push(yield saga.fork(monitorFolder, folder.path));
    }
    yield saga.take(actions.MONITORFOLDER_LOAD.type);
  }
}

function* monitorFolder(path: string) {
  console.log(`[Monitor.Folder] ${path}`);
  const processorGit = new Git();
  const watcher = yield saga.call(fsWatchChannel, path);
  for (; ;) {
    const next = yield saga.take(watcher);
    const path = yield processorGit.resolve(next.path);
    if (path) {
      yield saga.put(actions.TRIGGERED_FOLDER({ path }));
    }
  }
}

function fsWatchChannel(folder: string) {
  return eventChannel((emitter) => {
    const options = { persistent: false, recursive: true };
    const listener = (event: string, filename: string) => {
      if (event && filename) {
        emitter({ path: path.join(folder, filename) });
      }
    };
    const watcher = fs.watch(folder, options, listener);
    watcher.on('error', (err: Error) => {
      Report.error(err);
    });
    const unsub = () => { watcher.close(); };
    return unsub;
  });
}
