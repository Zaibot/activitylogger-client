import { Caption, Label } from '@zaibot/activitylogger-react';
import React from 'react';
import { PureConnect } from 'react-redux-pure';
import * as actions from '../actions';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`PageAdvanced`)(
  (state: State) => ({
    config: selectors.config(state),
  }),
  (dispatch) => ({
    reset: () => dispatch(actions.RESET_CONFIG({})),
  }),
  ({ config, reset }) => (
    <div>
      <div><Caption>Recording timespan</Caption><br /><input type="number" min="5" max="900" value={(config.maxDuration / 1000).toFixed(0)} /> <Label>seconds</Label></div>
      <div><Caption>Window titles</Caption><br /><input type="number" min="1" max="100" value={config.maxWindows} /></div>
      <div><Caption>Folder paths</Caption><br /><input type="number" min="1" max="100" value={config.maxFolders} /></div>
      <div><Caption>Key presses</Caption><br /><input type="number" min="1" max="10000" value={config.maxKeyPresses} /></div>
      <div><Caption>Mouse clicks</Caption><br /><input type="number" min="1" max="10000" value={config.maxMousePresses} /></div>
      <h2> - Maximum values per submitted evidence</h2>
      <div>
        <button onClick={reset}>Reset Defaults</button>
      </div>
    </div>
  ));
