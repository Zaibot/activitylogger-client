import { Action, isType } from '../../actions';
import * as actions from '../../actions';
import { delay } from 'redux-saga';
import * as saga from 'redux-saga/effects';
import { Report } from '../../errors';
import ActiveWindow from 'active-win';

export interface IActiveWindow {
  app: string;
  title: string;
}

export default function* () {
  yield saga.fork(monitorActiveWindowTitle);
}
function* monitorActiveWindowTitle() {
  let last: IActiveWindow = { app: null, title: null };
  for (; ;) {
    try {
      const { app, title } = yield ActiveWindow();
      if (app !== last.app || title !== last.title) {
        yield saga.put(actions.TRIGGERED_WINDOW({ app, title }));
        last = { app, title };
      }
    } catch (ex) {
      Report.error(ex);
    }
    yield delay(250);
  }
}
