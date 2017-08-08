import * as actions from '../../actions';
import { Action, isType } from '../../actions';

export interface State {
  lastInteraction: number;
  lastIdle: number;
}
const emptyState: State = {
  lastInteraction: Date.now(),
  lastIdle: 0,
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.TRIGGERED_IDLE, action)) {
    if (state.lastInteraction > state.lastIdle) {
      const lastInteraction = state.lastInteraction;
      const lastIdle = action.payload.time;
      state = { lastInteraction, lastIdle };
    }
  }
  if (isType(actions.TRIGGERED_ACTIVE, action)) {
    const lastInteraction = action.payload.time;
    const lastIdle = state.lastIdle;
    state = { lastInteraction, lastIdle };
  }
  return state;
};
