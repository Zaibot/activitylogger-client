import { takeEvery } from 'redux-saga';
import * as saga from 'redux-saga/effects';
import * as actions from '../actions';
import MainWindow from './window';

export default function*() {
  yield takeEvery(actions.WINDOW_SHOW.type, monitorWindowShow);
  yield takeEvery(actions.WINDOW_HIDE.type, monitorWindowHide);
  yield takeEvery([actions.USERRETURNED_INIT.type], monitorExternalShow);
  yield takeEvery([actions.USERRETURNED_SKIP.type, actions.USERRETURNED_COMMIT.type], monitorExternalHide);
  yield takeEvery([actions.INVITE_COMMIT.type], monitorInvite);
}

function* monitorWindowShow() {
  yield saga.put(actions.SELECT_VIEW({ view: 'Stats' }));
  yield MainWindow.show();
  yield MainWindow.wait();
  yield saga.put(actions.WINDOW_HIDE({ }));
}

function* monitorWindowHide() {
  yield MainWindow.hide();
}

function* monitorExternalShow() {
  yield saga.put(actions.WINDOW_SHOW({}));
}

function* monitorExternalHide() {
  yield saga.put(actions.WINDOW_HIDE({}));
}
function* monitorInvite() {
  yield saga.put(actions.SELECT_VIEW({ view: `Sync` }));
}
