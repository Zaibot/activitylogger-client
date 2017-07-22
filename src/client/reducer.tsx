import * as actions from '../actions';
import { Action, isType } from '../actions';

export type State = {
  busy: boolean;
  online: boolean;
  error: string;
  dashboardUrl: string;
  aggregatorUrl: string;
  logUrl: string;
};
const emptyState: State = {
  busy: false,
  online: false,
  error: null,
  dashboardUrl: null,
  aggregatorUrl: null,
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
    };
  }
  if (isType(actions.CONNECTION_BUSY, action)) {
    return {
      busy: true,
      online: false,
      dashboardUrl: null,
      aggregatorUrl: null,
      logUrl: null,
    };
  }
  if (isType(actions.CONNECTION_ONLINE, action)) {
    const { dashboardUrl, aggregatorUrl, logUrl } = action.payload
    return {
      busy: false,
      online: true,
      dashboardUrl,
      aggregatorUrl,
      logUrl,
    };
  }
  return state;
};
