import * as saga from 'redux-saga/effects';
import autoupdate from '../autoupdate/saga';
import buffer from '../buffer/saga';
import client from '../client/saga';
import config from '../config/saga';
import folder from '../folder/saga';
import keygen from '../keygen/saga';
import { rootSaga as tray } from '../launch/tray';
import monitorFolder from '../monitor/folder/saga';
import monitorIdle from '../monitor/idle/saga';
import activeWindow from '../monitor/window/saga';
import window from '../window/saga';

export default function*() {
  yield saga.fork(activeWindow);
  yield saga.fork(buffer);
  yield saga.fork(client);
  yield saga.fork(config);
  yield saga.fork(folder);
  yield saga.fork(keygen);
  yield saga.fork(monitorFolder);
  yield saga.fork(monitorIdle);
  yield saga.fork(window);
  yield saga.fork(tray);
  yield saga.fork(autoupdate);
}
