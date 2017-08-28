import '@zaibot/css-reset/reset.less';

import { Background } from '@zaibot/activitylogger-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PureConnect } from 'react-redux-pure';
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';
import { Auth } from '../Auth';
import configureStore from '../store/configureStoreBrowser';
import selectors from '../store/selectors';
import State from '../store/state';
import Dashboard from './AppDashboard';
import FolderMonitor from './AppFolderMonitor';
import Invite from './AppInvite';
import UserReturned from './AppUserReturned';
import { onDocumentContentLoaded } from './onDocumentContentLoaded';
import cx from './style.less';

const App = PureConnect(`App`)(
  (state: State) => ({
    hasPendingFolder: selectors.hasPendingFolder(state),
    hasPendingInvite: selectors.hasPendingInvite(state),
    hasPendingUserReturned: selectors.hasPendingUserReturned(state),
  }),
  (dispatch) => ({
  }),
  ({ hasPendingUserReturned, hasPendingInvite, hasPendingFolder }) => (
    <div className={cx(`app`)}>
      {hasPendingUserReturned ? <UserReturned /> : hasPendingInvite ? <Invite /> : hasPendingFolder ? <FolderMonitor /> : <Dashboard />}
    </div>
  ));

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), timeout);
  });
}

async function launch() {
  const store = configureStore();
  await delay(500);
  await onDocumentContentLoaded();
  await renderApp((
    <Provider store={store}>
      <StyletronProvider styletron={new Styletron()}>
        <Background>
          <App />
        </Background>
      </StyletronProvider>
    </Provider >
  ));
  document.documentElement.removeAttribute('class');
}

function renderApp(content: JSX.Element) {
  return new Promise((resolve) => {
    ReactDOM.render(content, document.querySelector('app'), () => resolve());
  });
}

launch();
