import * as actions from '../actions';
import { Action, isType } from '../actions';

export interface State {
  active: boolean;
  publicKey: string;
  timelineId: string;
}
const emptyState: State = {
  active: false,
  publicKey: '',
  timelineId: '',
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.INVITE_INIT, action)) {
    const active = true;
    const publicKey = '';
    const timelineId = action.payload.timelineId;
    state = { active, publicKey, timelineId };
  }
  if (isType(actions.INVITE_CHANGED_PUBLICKEY, action)) {
    const publicKey = action.payload.value;
    state = { ...state, publicKey };
  }
  if (isType(actions.INVITE_CANCEL, action)) {
    const active = false;
    const publicKey = '';
    const timelineId = '';
    state = { active, publicKey, timelineId };
  }
  if (isType(actions.INVITE_COMMIT, action)) {
    const active = false;
    const publicKey = '';
    const timelineId = '';
    state = { active, publicKey, timelineId };
  }
  return state;
};
