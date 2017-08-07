import reducers from './reducer';
import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import State from './state';
import * as actions from '../actions';
import rootSaga from './rootSaga';
import SagaMiddleware from 'redux-saga';
import { Report } from '../errors';
import {
  forwardToRenderer,
  triggerAlias,
  replayActionMain,
} from 'electron-redux';
import { AutoUpdateMiddleware } from "../autoupdate";

export default () => {
  const saga = SagaMiddleware();
  const debug = ({ getState }: any) => (next: any) => (action: any) => {
    // if (action.type !== 'INTERVAL_TICK') {
    //   console.log(action.type);
    // }
    return next(action);
  };
  const store = createStore<State>(
    combineReducers(reducers),
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(saga, forwardToRenderer, AutoUpdateMiddleware)
      : applyMiddleware(debug, saga, forwardToRenderer));
  saga.run(rootSaga);
  replayActionMain(store);
  Report.on('report', ({ time, error: { message } }) => {
    store.dispatch(actions.ERROR_APPLICATION({ time, message }));
  });
  return store;
};
