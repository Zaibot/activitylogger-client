import '@zaibot/css-reset/reset.less';

import { Background } from '@zaibot/activitylogger-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PureConnect } from 'react-redux-pure';
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';
import configureStore from '../store/configureStoreBrowser';
import selectors from '../store/selectors';
import State from '../store/state';
import Dashboard from './AppDashboard';
import FolderMonitor from './AppFolderMonitor';
import Invite from './AppInvite';
import UserReturned from './AppUserReturned';
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
ReactDOM.render((
  <Provider store={store}>
    <StyletronProvider styletron={new Styletron()}>
      <Background>
        <App />
      </Background>
    </StyletronProvider>
  </Provider>
), document.querySelector('app'));
