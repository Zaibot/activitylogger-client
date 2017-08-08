import React from 'react';
import { PureConnect } from 'react-redux-pure';
import * as actions from '../actions';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`PageMeeting`)(
  (state: State) => ({
    config: selectors.config(state),
  }),
  (dispatch) => ({
    exportPrivateKey: () => { /* TODO */ },
    generateKeypair: () => dispatch(actions.GENERATE_KEYPAIR({})),
  }),
  ({ config, exportPrivateKey, generateKeypair }) => (
    <div>
      <div><label>Title:<br /><input type="text" /></label></div>
      <div><label>Description:<br /><textarea /></label></div>
      <button>Add</button>
    </div>
  ));
