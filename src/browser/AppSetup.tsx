import { Screen, Title, TitleSub } from '@zaibot/activitylogger-react';
import React from 'react';
import { PureConnect } from 'react-redux-pure';
import * as actions from '../actions';
import selectors from '../store/selectors';
import State from '../store/state';
import WebLink from '../WebLink';

export default PureConnect(`AppSetup`)(
  (state: State) => ({
    config: selectors.config(state),
  }),
  (dispatch) => ({
    reset: () => dispatch(actions.RESET_CONFIG({})),
  }),
  ({ config, reset }) => (
    <Screen>
      <Title>Welcome to Activity Logger!</Title>
      <TitleSub>Introduction</TitleSub>
      <p>
        This software will monitor your activity and report this to a server.<br />
        By default you'll be connected to al.zaibot.net, but you may setup your own (<WebLink href={`https://activitylogger.github.io/wiki/private-server`}>show me how</WebLink>).
      </p>
      <div>
        <button onClick={reset}>OK, no problem</button> <button onClick={reset}>I would like a private server</button>
      </div>
      <TitleSub>Security</TitleSub>
      <p>
        Information on the server is only accessable to you, for this a keypair is needed by the client.
      </p>
      <div>
        <button onClick={reset}>Create on for me</button> <button onClick={reset}>Import my own</button>
      </div>
      <TitleSub>Monitoring</TitleSub>
      <p>
        Would you like me to monitor project folders for changes?<br />
        Only GIT folders are supported at the moment.
      </p>
      <div>
        <button onClick={reset}>Add folders</button> <button onClick={reset}>No, thanks</button>
      </div>
      <TitleSub>Ready to go!</TitleSub>
      <p>
        Everything is setup and Activity Logger is ready to start recording.<br />
        The configuration can be changed at anytime by accessing the gear icon in the top right.
      </p>
      <div>
        <button onClick={reset}>Thank you</button> <button onClick={reset}>Wait with recording</button>
      </div>
    </Screen>
  ));
