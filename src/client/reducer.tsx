import * as actions from '../actions';
import { Action, isType } from '../actions';

export interface State {
  busy: boolean;
  online: boolean;
  error: string;
  dashboardUrl: string;
  aggregatorUrl: string;
  electronUrl: string;
  logUrl: string;
}
const emptyState: State = {
  busy: false,
  online: false,
  error: null,
  dashboardUrl: null,
  aggregatorUrl: null,
  electronUrl: null,
  logUrl: null,
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.CONNECTION_OFFLINE, action)) {
    return {
      busy: false,
      online: false,
      dashboardUrl: null,
      aggregatorUrl: null,
      logUrl: null,
      electronUrl: null,
    };
  }
  if (isType(actions.CONNECTION_BUSY, action)) {
    return {
      busy: true,
      online: false,
      dashboardUrl: null,
      aggregatorUrl: null,
      logUrl: null,
      electronUrl: null,
    };
  }
  if (isType(actions.CONNECTION_ONLINE, action)) {
    const { dashboardUrl, aggregatorUrl, logUrl, electronUrl } = action.payload;
    return {
      busy: false,
      online: true,
      dashboardUrl,
      aggregatorUrl,
      logUrl,
      electronUrl,
    };
  }
  return state;
};
