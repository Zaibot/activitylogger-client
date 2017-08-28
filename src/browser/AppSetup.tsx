import { Button, Screen, Title, TitleSub } from '@zaibot/activitylogger-react';
import * as React from 'react';
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
        <Button primary onClick={reset}>OK, no problem</Button> <Button onClick={reset}>I would like a private server</Button>
      </div>
      <TitleSub>Security</TitleSub>
      <p>
        Information on the server is only accessable to you, for this a keypair is needed by the client.
      </p>
      <div>
        <Button primary onClick={reset}>Create on for me</Button> <Button onClick={reset}>Import my own</Button>
      </div>
      <TitleSub>Monitoring</TitleSub>
      <p>
        Would you like me to monitor project folders for changes?<br />
        Only GIT folders are supported at the moment.
      </p>
      <div>
        <Button primary onClick={reset}>Add folders</Button> <Button onClick={reset}>No, thanks</Button>
      </div>
      <TitleSub>Ready to go!</TitleSub>
      <p>
        Everything is setup and Activity Logger is ready to start recording.<br />
        The configuration can be changed at anytime by accessing the gear icon in the top right.
      </p>
      <div>
        <Button primary onClick={reset}>Thank you</Button> <Button onClick={reset}>Wait with recording</Button>
      </div>
    </Screen>
  ));
