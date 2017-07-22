import * as actions from '../actions';
import { isType, Action } from '../actions';
import { IFolderItem } from './database';

export type State = {
  active: boolean;
  folder: string;
  folders: IFolderItem[]
};
const emptyState: State = {
  active: false,
  folder: '',
  folders: [],
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.MONITORFOLDER_LOAD, action)) {
    state = { ...state, folders: action.payload.folders };
  }
  if (isType(actions.MONITORFOLDER_INIT, action)) {
    const active = true;
    const folder = '';
    state = { ...state, active, folder };
  }
  if (isType(actions.MONITORFOLDER_CHANGED_FOLDER, action)) {
    const folder = action.payload.value;
    state = { ...state, folder };
  }
  if (isType(actions.MONITORFOLDER_CANCEL, action)) {
    const active = false;
    const folder = '';
    state = { ...state, active, folder };
  }
  if (isType(actions.MONITORFOLDER_COMMIT, action)) {
    const active = false;
    const folder = '';
    state = { ...state, active, folder };
  }
  return state;
};
