import * as saga from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Report } from '../errors';
import * as actions from '../actions';

export const catchTakeEvery = function (actions: string | string[], fn: saga.CallEffectFn<any>): saga.ForkEffect {
  return saga.takeEvery(actions, sagaHandleError(fn));
}
export const catchTakeLatest = function (actions: string | string[], fn: saga.CallEffectFn<any>): saga.ForkEffect {
  return saga.takeLatest(actions, sagaHandleError(fn));
}
export const catchFork = function (fn: saga.CallEffectFn<any>): saga.ForkEffect {
  return saga.fork(sagaHandleError(fn));
}
export const catchForkForever = function (fn: saga.CallEffectFn<any>): saga.ForkEffect {
  return saga.fork(sagaHandleErrorForever(fn));
}

export const sagaHandleError = function (inner: saga.CallEffectFn<any>) {
  return function* (...args: any[]) {
    try {
      yield saga.call(inner, ...args);
    } catch (ex) {
      Report.error(ex);
    }
  };
};

export const sagaHandleErrorForever = function (inner: saga.CallEffectFn<any>) {
  return function* (...args: any[]) {
    for (; ;) {
      try {
        yield saga.call(inner, ...args);
      } catch (ex) {
        Report.error(ex);
      }
    }
  };
};
