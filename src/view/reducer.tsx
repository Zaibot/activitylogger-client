import * as actions from '../actions';
import { isType, Action } from '../actions';

export type State = {
  current: string;
};
const emptyState: State = {
  current: 'Sync'
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.SELECT_VIEW, action)) {
    const current = action.payload.view;
    state = { current };
  }
  return state;
};
