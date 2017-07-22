import * as actions from '../actions';
import { isType, Action } from '../actions';

export type State = {
  time: number;
};
const emptyState: State = {
  time: Date.now(),
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.INTERVAL_TICK, action)) {
    const { time } = action.payload;
    state = { time };
  }
  return state;
};
