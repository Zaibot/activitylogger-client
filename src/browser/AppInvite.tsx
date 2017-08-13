import { Caption, Label, Screen, Title, TitleSub } from '@zaibot/activitylogger-react';
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
    <Screen>
      <Title>Invite</Title>
      <div>
        <TitleSub>What to do?</TitleSub>
        <p>
          <Label>Ask the user to copy their public key from <Icon value={`lock`} />.</Label>
        </p>
        <p>
          <Label>Fill in their public key below and give them the following timeline ID which they need to enter into <Icon value={`settings`} /></Label>
        </p>
        <p>
          <Label>Then click Register timeline</Label>
        </p>
      </div>
      <div><Caption>New Timeline ID</Caption><br /><input type="text" size={40} value={timelineId} /></div>
      <div><Caption>Their Public Key</Caption><br /><textarea cols={40} rows={6} value={publicKey} onChange={(e) => onPublicKeyChanged(e.target.value)} style={{ fontSize: 12 }} /></div>
      <div><button onClick={() => onCommit(timelineId, publicKey)}>Register timeline</button> <button onClick={onCancel}>Cancel</button></div>
    </Screen>
  ));
