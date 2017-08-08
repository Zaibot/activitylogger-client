import { app, autoUpdater } from 'electron';
import { Dispatch, Middleware, Store } from 'redux';
import { Action, isType } from '../actions';
import * as actions from '../actions';
import { Report } from '../errors';
import State from '../store/state';

export const AutoUpdateMiddleware: Middleware = ((store: Store<State>) => {
  autoUpdater.on('error', (error) => {
    Report.error(error);
    const time = Date.now();
    store.dispatch(actions.AUTOUPDATE_ERROR({ time, error }));
  });
  autoUpdater.on('checking-for-update', () => {
    const time = Date.now();
    store.dispatch(actions.AUTOUPDATE_CHECKING({ time }));
  });
  autoUpdater.on('update-available', () => {
    const time = Date.now();
    const available = true;
    store.dispatch(actions.AUTOUPDATE_SUCCESS({ time, available }));
  });
  autoUpdater.on('update-not-available', () => {
    const time = Date.now();
    const available = false;
    store.dispatch(actions.AUTOUPDATE_SUCCESS({ time, available }));
  });
  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    const time = Date.now();
    const appName = app.getName();
    store.dispatch(actions.AUTOUPDATE_READY({ time, appName, releaseName, releaseNotes }));
  });
  return (next: Dispatch<State>) => (action: Action<any>) => {
    if (isType(actions.AUTOUPDATE_INSTALL, action)) {
      setImmediate(() => autoUpdater.quitAndInstall());
    }
    if (isType(actions.CONNECTION_ONLINE, action)) {
      const version = app.getVersion();
      const updaterFeedURL = `${action.payload.electronUrl}/update/win64/${version}`;
      console.log(`Checking for updates at ${updaterFeedURL}`);
      autoUpdater.setFeedURL(updaterFeedURL);
      autoUpdater.checkForUpdates();
    }
    return next(action);
  };
}) as any;
