import {
  forwardToRenderer,
  replayActionMain,
} from 'electron-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import SagaMiddleware from 'redux-saga';
import * as actions from '../actions';
import { AutoUpdateMiddleware } from '../autoupdate';
import { Report } from '../errors';
import reducers from './reducer';
import rootSaga from './rootSaga';
import State from './state';

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
