import React from 'react';
import { PureConnect } from 'react-redux-pure';
import * as actions from '../actions';
import Icon from '../icon';
import selectors from '../store/selectors';
import State from '../store/state';

const formatter = new Intl.DateTimeFormat([], { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', weekday: 'short' });

export default PureConnect(`AppInvite`)(
  (state: State) => ({
    invite: selectors.invite(state),
  }),
  (dispatch) => ({
    onPublicKeyChanged: (value: string) => dispatch(actions.INVITE_CHANGED_PUBLICKEY({ value })),
    onCancel: () => dispatch(actions.INVITE_CANCEL({})),
    onCommit: (timelineId: string, publicKey: string) => dispatch(actions.INVITE_COMMIT({ timelineId, publicKey })),
  }),
  ({ invite: { timelineId, publicKey }, onPublicKeyChanged, onCancel, onCommit }) => (
    <div>
      <h1>Invite</h1>
      <div>
        <h2>What to do?</h2>
        <p>
          Ask the user to copy their public key from <Icon value={`lock`} />.
        </p>
        <p>
          Fill in their public key below and give them the following timeline ID which they need to enter into <Icon value={`settings`} />:
        </p>
        <p>
          Then click Register timeline
        </p>
      </div>
      <div><label>New Timeline ID:<br /><input type="text" size={40} value={timelineId} /></label></div>
      <div><label>Their Public Key:<br /><textarea cols={40} rows={10} value={publicKey} onChange={(e) => onPublicKeyChanged(e.target.value)} /></label></div>
      <div><button onClick={() => onCommit(timelineId, publicKey)}>Register timeline</button> <button onClick={onCancel}>Cancel</button></div>
    </div>
  ));
