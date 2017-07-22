import reducers from './reducer';
import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import State from './state';
import rootSaga from './rootSaga';
import SagaMiddleware from 'redux-saga';
import {
  forwardToRenderer,
  triggerAlias,
  replayActionMain,
} from 'electron-redux';

export default () => {
    const saga = SagaMiddleware();
    const debug = ({ getState }: any) => (next: any) => (action: any) => {
      // if (action.type !== 'INTERVAL_TICK') {
      //   console.log(action.type);
      // }
      return next(action);
    };
    const store = createStore<State>(combineReducers(reducers), process.env.NODE_ENV === 'production' ? applyMiddleware(saga, forwardToRenderer) : applyMiddleware(debug, saga, forwardToRenderer));
    saga.run(rootSaga);
    replayActionMain(store);
    return store;
};
