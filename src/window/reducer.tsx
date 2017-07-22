import * as actions from '../actions';
import { isAnyType, Action } from '../actions';

export type State = {
  visible: boolean;
};
const emptyState: State = {
  visible: false,
};

export default (state = emptyState, action: Action<any>) => {
  if (isAnyType(action, actions.WINDOW_HIDE)) {
    return { visible: false };
  }
  else if (isAnyType(action, actions.WINDOW_SHOW)) {
    return { visible: true };
  }
  return state;
};
