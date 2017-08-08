import React from 'react';
import { PureConnect } from 'react-redux-pure';
import * as actions from '../actions';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`PageAuth`)(
  (state: State) => ({
    config: selectors.config(state),
  }),
  (dispatch) => ({
    onExport: (privateKey: string, publicKey: string) => dispatch(actions.EXPORT_KEYPAIR({ privateKey, publicKey })),
    onGenerate: () => dispatch(actions.GENERATE_KEYPAIR({})),
  }),
  ({ config: { publicKey, privateKey }, onExport, onGenerate }) => (
    <div>
      <div><label>Public Key:</label><br /><textarea value={publicKey} cols={80} rows={8} style={{ fontSize: 12 }} /></div>
      <div><label>Private Key:</label><br /><button onClick={() => onExport(privateKey, publicKey)}>Export</button></div>
      <div>
        <button onClick={onGenerate}>Generate new keypair</button>
      </div>
    </div>
  ));
