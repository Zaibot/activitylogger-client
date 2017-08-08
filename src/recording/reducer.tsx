import * as actions from '../actions';
import { Action, isType } from '../actions';

export interface State {
  folders: string[];
  keypresses: number;
  mousepresses: number;
  timeStart: number;
  windows: string[];
}
const emptyState: State = {
  folders: [],
  keypresses: 0,
  mousepresses: 0,
  timeStart: 0,
  windows: [],
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.TRIGGERED_WINDOW, action)) {
    const title = action.payload.title;
    const windows = [...state.windows.filter((x) => x !== title), title];
    state = { ...state, windows };
  } else if (isType(actions.TRIGGERED_FOLDER, action)) {
    if (state.folders.indexOf(action.payload.path)) {
      const path = action.payload.path;
      const folders = [...state.folders.filter((x) => x !== path), path];
      state = { ...state, folders };
    }
  } else if (isType(actions.KEY_PRESSED, action)) {
    const keypresses = state.keypresses + 1;
    state = { ...state, keypresses };
  } else if (isType(actions.MOUSE_PRESSED, action)) {
    const mousepresses = state.mousepresses + 1;
    state = { ...state, mousepresses };
  }
  if (isType(actions.RESET_RECORDING, action)) {
    state = {
      folders: [],
      keypresses: 0,
      mousepresses: 0,
      timeStart: Date.now(),
      windows: state.windows.length ? [state.windows[state.windows.length - 1]] : [],
    };
  }
  return state;
};
