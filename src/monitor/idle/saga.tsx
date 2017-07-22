import { Action, isType } from '../../actions';
import * as actions from '../../actions';
import { takeEvery, delay } from 'redux-saga';
import * as saga from 'redux-saga/effects';
import ActiveWindow from 'active-win';
import { State as ConfigState } from '../../config/reducer';
import selectors from '../../store/selectors';

export interface IActiveWindow {
  app: string;
  title: string;
}

export default function* () {
  yield takeEvery([actions.KEY_PRESSED.type, actions.MOUSE_PRESSED.type], monitorUserActive);
  yield takeEvery([actions.INTERVAL_TICK.type], monitorUserIdle);
}

function* monitorUserActive(action: Action<any>) {
  if (isType(actions.KEY_PRESSED, action) || isType(actions.MOUSE_PRESSED, action)) {
    const time: number = yield saga.select(selectors.appTime);
    const config: ConfigState = yield saga.select(selectors.config);
    const isIdle = yield saga.select(selectors.isIdle);
    if (isIdle) {
      const timeStart: number = yield saga.select(selectors.timeInteraction);
      const timeEnd = time;
      yield saga.put(actions.USERRETURNED_INIT({ timeStart, timeEnd }));
    }
    const durationIdle: number = yield saga.select(selectors.durationIdle);
    yield saga.put(actions.TRIGGERED_ACTIVE({ time, durationIdle }));
  }
}
function* monitorUserIdle(action: Action<any>) {
  if (isType(actions.INTERVAL_TICK, action)) {
    const time: number = yield saga.select(selectors.appTime);
    const config: ConfigState = yield saga.select(selectors.config);
    const durationIdle: number = yield saga.select(selectors.durationIdleReal);
    const timeInteraction: number = yield saga.select(selectors.timeInteraction);
    const timeIdle: number = yield saga.select(selectors.timeIdle);
    if (timeIdle < timeInteraction && durationIdle >= config.idleTimeout) {
      const timeStart: number = yield saga.select(selectors.timeInteraction);
      const timeEnd = time;
      yield [
        saga.put(actions.TRIGGERED_IDLE({ time, durationIdle })),
        saga.put(actions.USERRETURNED_INIT({ timeStart, timeEnd }))
      ];
    }
  }
}
