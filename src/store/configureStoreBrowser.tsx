import reducers from './reducer';
import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import State from './state';
import rootSaga from './rootSaga';
import SagaMiddleware from 'redux-saga';
import {
  forwardToMain,
  replayActionRenderer,
  getInitialStateRenderer,
} from 'electron-redux';

export default () => {
  const initialState = getInitialStateRenderer();
  const store = createStore<State>(combineReducers(reducers), initialState, applyMiddleware(forwardToMain));
  replayActionRenderer(store);
  return store;
};
