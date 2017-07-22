import '@zaibot/css-reset/reset.less';

import configureStore from '../store/configureStoreBrowser';
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './AppDashboard';
import UserReturned from './AppUserReturned';
import FolderMonitor from './AppFolderMonitor';
import Setup from './AppSetup';
import Invite from './AppInvite';
import { Provider } from 'react-redux';
import { PureConnect } from 'react-redux-pure';
import State from '../store/state';
import selectors from '../store/selectors';
import cx from './style.less';

const App = PureConnect(`App`)(
  (state: State) => ({
    hasPendingUserReturned: selectors.hasPendingUserReturned(state),
    hasPendingInvite: selectors.hasPendingInvite(state),
    hasPendingFolder: selectors.hasPendingFolder(state),
  }),
  (dispatch) => ({
  }),
  ({ hasPendingUserReturned, hasPendingInvite, hasPendingFolder }) => (
    <div className={cx(`app`)}>
      {hasPendingUserReturned ? <UserReturned /> : hasPendingInvite ? <Invite /> : hasPendingFolder ? <FolderMonitor /> : <Dashboard />}
    </div>
  ));

const store = configureStore();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('app'));
