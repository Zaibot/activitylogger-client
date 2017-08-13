import { app } from 'electron';
import * as actions from '../actions';
import autolaunch from '../autolaunch';
import setupHook from '../hook';
import configureStore from '../store/configureStore';
import tray from './tray';

export default () => {
  process.on('uncaughtException' as any, function(error: Error) {
    // Handle the error
    console.error(error.toString());
  });
  app.on('window-all-closed', () => {
  });
  app.on('ready', () => {
    const store = configureStore();
    const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
      store.dispatch(actions.WINDOW_SHOW({}));
    });
    if (shouldQuit) {
      return app.quit();
    }

    tray(store);
    setupHook(store);
    store.dispatch(actions.RESET_RECORDING({}));

    setInterval(() => {
      const time = Date.now();
      store.dispatch(actions.INTERVAL_TICK({ time }));
    }, 100);

    autolaunch();

    if (!process.argv.includes('--hidden')) {
      store.dispatch(actions.WINDOW_SHOW({}));
    }
  });
};
