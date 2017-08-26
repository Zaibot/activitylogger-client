import { Caption, Button } from '@zaibot/activitylogger-react';
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
      <div><Caption>Public Key</Caption><br /><textarea value={publicKey} cols={80} rows={8} style={{ fontSize: 12 }} /></div>
      <div><Caption>Private Key</Caption><br /><Button onClick={() => onExport(privateKey, publicKey)}>Export</Button></div>
      <div>
        <Button secondary onClick={onGenerate}>Generate new keypair</Button>
      </div>
    </div>
  ));
