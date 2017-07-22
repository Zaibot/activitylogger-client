import * as actions from '../actions';
import { Action, isType } from '../actions';
import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';

export default PureConnect(`PageAdvanced`)(
  (state: State) => ({
    config: selectors.config(state),
  }),
  (dispatch) => ({
    reset: () => dispatch(actions.RESET_CONFIG({}))
  }),
  ({ config, reset }) => (
    <div>
      <div><label>Recording timespan:</label><br /><input type="number" min="5" max="900" value={(config.maxDuration / 1000).toFixed(0)} /> seconds</div>
      <div><label>Window titles:</label><br /><input type="number" min="1" max="100" value={config.maxWindows} /></div>
      <div><label>Folder paths:</label><br /><input type="number" min="1" max="100" value={config.maxFolders} /></div>
      <div><label>Key presses:</label><br /><input type="number" min="1" max="10000" value={config.maxKeyPresses} /></div>
      <div><label>Mouse clicks:</label><br /><input type="number" min="1" max="10000" value={config.maxMousePresses} /></div>
      <h2> - Maximum values per submitted evidence</h2>
      <div>
        <button onClick={reset}>Reset Defaults</button>
      </div>
    </div>
  ));
