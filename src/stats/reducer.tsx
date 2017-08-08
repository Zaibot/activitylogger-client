import * as actions from '../actions';
import { Action, isType } from '../actions';

export interface State {
  timeStart: number;
  windows: string[];
  folders: string[];
  meetings: number;
  keypresses: number;
  mousepresses: number;
  submissionSuccess: number;
  submissionErrors: number;
}
const emptyState: State = {
  timeStart: Date.now(),
  windows: [],
  folders: [],
  meetings: 0,
  keypresses: 0,
  mousepresses: 0,
  submissionSuccess: 0,
  submissionErrors: 0,
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.TRIGGERED_WINDOW, action)) {
    const title = action.payload.title;
    const windows = [...state.windows.filter((x) => x !== title), title];
    state = { ...state, windows };
  }
  else if (isType(actions.TRIGGERED_FOLDER, action)) {
    if (state.folders.indexOf(action.payload.path)) {
      const path = action.payload.path;
      const folders = [...state.folders.filter((x) => x !== path), path];
      state = { ...state, folders };
    }
  }
  else if (isType(actions.KEY_PRESSED, action)) {
    const keypresses = state.keypresses + 1;
    state = { ...state, keypresses };
  }
  else if (isType(actions.MOUSE_PRESSED, action)) {
    const mousepresses = state.mousepresses + 1;
    state = { ...state, mousepresses };
  }
  else if (isType(actions.BUFFER_SUCCESS, action)) {
    const submissionSuccess = state.submissionSuccess + 1;
    state = { ...state, submissionSuccess };
  }
  else if (isType(actions.BUFFER_ERROR, action)) {
    const submissionErrors = state.submissionErrors + 1;
    state = { ...state, submissionErrors };
  }
  return state;
};
