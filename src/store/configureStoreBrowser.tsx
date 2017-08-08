import {
  forwardToMain,
  getInitialStateRenderer,
  replayActionRenderer,
} from 'electron-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './reducer';
import State from './state';

export default () => {
  const initialState = getInitialStateRenderer();
  const store = createStore<State>(combineReducers(reducers), initialState, applyMiddleware(forwardToMain));
  replayActionRenderer(store);
  return store;
};
