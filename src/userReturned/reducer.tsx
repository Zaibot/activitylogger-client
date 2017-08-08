import * as actions from '../actions';
import { Action, isType } from '../actions';

export interface State {
  active: boolean;
  timeStart: number;
  timeEnd: number;
  title: string;
  description: string;
}
const emptyState: State = {
  active: false,
  timeStart: 0,
  timeEnd: 0,
  title: '',
  description: '',
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.USERRETURNED_INIT, action)) {
    const active = true;
    const timeStart = action.payload.timeStart;
    const timeEnd = action.payload.timeEnd;
    const title = '';
    const description = '';
    state = { active, timeStart, timeEnd, title, description };
  }
  if (isType(actions.USERRETURNED_TITLE_CHANGED, action)) {
    const title = action.payload.value;
    state = { ...state, title };
  }
  if (isType(actions.USERRETURNED_DESCRIPTION_CHANGED, action)) {
    const description = action.payload.value;
    state = { ...state, description };
  }
  if (isType(actions.USERRETURNED_SKIP, action)) {
    const active = false;
    const timeStart = 0;
    const timeEnd = 0;
    const title = '';
    const description = '';
    state = { active, timeStart, timeEnd, title, description };
  }
  if (isType(actions.USERRETURNED_COMMIT, action)) {
    const active = false;
    const timeStart = 0;
    const timeEnd = 0;
    const title = '';
    const description = '';
    state = { active, timeStart, timeEnd, title, description };
  }
  return state;
};
