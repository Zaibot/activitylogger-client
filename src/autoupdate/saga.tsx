import * as safe from '../helpers';
import * as saga from 'redux-saga/effects';
import * as actions from '../actions';
import { Action, isType } from '../actions';
import selectors from '../store/selectors';
import { dialog } from 'electron';

export default function* () {
  yield saga.takeEvery(actions.AUTOUPDATE_READY.type, updateReadyForInstall);
}

function* updateReadyForInstall(action: Action<any>) {
  if (isType(actions.AUTOUPDATE_READY, action)) {
    const { appName, releaseName, releaseNotes } = action.payload;
    let message = `${appName} ${releaseName} is now available. It will be installed the next time you restart the application.`;
    if (releaseNotes) {
      const splitNotes = releaseNotes.split(/[^\r]\n/);
      message += '\n\nRelease notes:\n';
      splitNotes.forEach(notes => {
        message += notes + '\n\n';
      });
    }
    // Ask user to update the app
    yield saga.put(actions.WINDOW_HIDE({}));
    const response = yield new Promise((resolve, reject) => {
      dialog.showMessageBox({
        type: 'question',
        buttons: ['Install and Relaunch', 'Later'],
        defaultId: 0,
        message: `A new version of ${appName} has been downloaded`,
        detail: message
      }, response => {
        resolve(response === 0)
      })
    });
    if (response) {
      const time = Date.now();
      yield saga.put(actions.AUTOUPDATE_INSTALL({ time }));
    } else {
      const time = Date.now();
      yield saga.put(actions.AUTOUPDATE_LATER({ time }));
    }
  }
}
