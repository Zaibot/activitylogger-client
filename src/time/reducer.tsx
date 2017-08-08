import * as actions from '../actions';
import { Action, isType } from '../actions';

export interface State {
  time: number;
}
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
