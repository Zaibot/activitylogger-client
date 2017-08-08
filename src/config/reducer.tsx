import * as actions from '../actions';
import { Action, isType } from '../actions';

export interface State {
  serverUrl: string;
  privateKey: string;
  publicKey: string;
  timelineId: string;
  sourceId: string;
  maxDuration: number;
  maxWindows: number;
  maxFolders: number;
  maxKeyPresses: number;
  maxMousePresses: number;
  idleTimeout: number;
}
const emptyState: State = {
  serverUrl: null,
  privateKey: null,
  publicKey: null,
  timelineId: null,
  sourceId: null,
  // maxDuration: 5000,
  maxDuration: 30000,
  maxWindows: 5,
  maxFolders: 5,
  maxKeyPresses: 1000,
  maxMousePresses: 1000,
  idleTimeout: 60000 * 5, // 5 minutes
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.RESET_CONFIG, action)) {
    return {
      ...state,
      maxDuration: 30000,
      maxWindows: 5,
      maxFolders: 5,
      maxKeyPresses: 1000,
      maxMousePresses: 1000,
      idleTimeout: 60000 * 5, // 5 minutes
    };
  }
  if (isType(actions.CHANGED_PUBLICKEY, action)) {
    const publicKey = action.payload.key;
    return { ...state, publicKey };
  }
  if (isType(actions.CHANGED_PRIVATEKEY, action)) {
    const privateKey = action.payload.key;
    return { ...state, privateKey };
  }
  if (isType(actions.CHANGED_SOURCE, action)) {
    const sourceId = action.payload.value;
    return { ...state, sourceId };
  }
  if (isType(actions.CHANGED_TIMELINE, action)) {
    const timelineId = action.payload.value;
    return { ...state, timelineId };
  }
  if (isType(actions.CHANGED_SERVER, action)) {
    const serverUrl = action.payload.value;
    return { ...state, serverUrl };
  }
  return state;
};
