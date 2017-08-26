import { Icon, Screen, Button } from '@zaibot/activitylogger-react';
import React from 'react';
import { PureConnect } from 'react-redux-pure';
import uuid from 'uuid';

import * as actions from '../actions';
import { Status } from '../buffer';
import selectors from '../store/selectors';
import State from '../store/state';
import ViewSelector from '../view/Selector';
import View from '../view/View';
import WebLink from '../WebLink';
import CounterFolder from './CounterFolder';
import CounterIdleTime from './CounterIdleTime';
import CounterKey from './CounterKey';
import CounterMeeting from './CounterMeeting';
import CounterMouse from './CounterMouse';
import CounterSessionTime from './CounterSessionTime';
import CounterSubmissions from './CounterSubmissions';
import CounterWindow from './CounterWindow';
import Header from './Header';
import PageAdvanced from './PageAdvanced';
import PageAuth from './PageAuth';
import PageBuffer from './PageBuffer';
import PageConfig from './PageConfig';
import PageFolder from './PageFolder';
import PageMeeting from './PageMeeting';

export default PureConnect(`AppDashboard`)(
  (state: State) => ({
    pendingBuffer: state.buffer.tasks.some((x) => x.status !== Status.Sent),
    offline: selectors.isDisconnected(state),
    windowTitleLast: selectors.windowTitleLast(state),
  }),
  (dispatch) => ({
    onInvite: () => dispatch(actions.INVITE_INIT({ timelineId: uuid.v4() })),
  }),
  ({ offline, pendingBuffer, windowTitleLast, onInvite }) => (
    <Screen>
      <Header />
      <ViewSelector items={[
        { id: `Stats`, title: <Icon iconSize={`48px` as any}>home</Icon> },
        { id: `Meeting`, title: <Icon iconSize={`48px` as any}>people</Icon> },
        { id: `Folders`, title: <Icon iconSize={`48px` as any}>folder</Icon> },
        { id: `Configuration`, title: <Icon iconSize={`48px` as any}>settings</Icon> },
        { id: `Advanced`, title: <Icon iconSize={`48px` as any}>build</Icon> },
        { id: `Auth`, title: <Icon iconSize={`48px` as any}>lock</Icon> },
        { id: `Sync`, title: <Icon iconSize={`48px` as any}>{offline ? `cloud_queue` : pendingBuffer ? `cloud_upload` : `cloud_done`}</Icon> },
        { id: `About`, title: <Icon iconSize={`48px` as any}>info</Icon> },
      ]} />
      <View name={`Stats`}>
        <CounterKey />
        <CounterMouse />
        <CounterSubmissions />
        <CounterMeeting />
        <CounterFolder />
        <CounterWindow />
        <CounterSessionTime />
        <CounterIdleTime />
        <Button onClick={onInvite}>Invite another user</Button>
      </View>
      <View name={`Meeting`}>
        <PageMeeting />
      </View>
      <View name={`Folders`}>
        <PageFolder />
      </View>
      <View name={`Configuration`}>
        <PageConfig />
      </View>
      <View name={`Advanced`}>
        <PageAdvanced />
      </View>
      <View name={`Auth`}>
        <PageAuth />
      </View>
      <View name={`Sync`}>
        <PageBuffer />
      </View>
      <View name={`About`}>
        <p>
          Open source project hosted on:<br />
          <WebLink href="https://github.com/Zaibot/activitylogger-client">github.com/Zaibot/activitylogger-client</WebLink><br />
          <WebLink href="https://github.com/Zaibot/activitylogger-log">github.com/Zaibot/activitylogger-log</WebLink><br />
          <WebLink href="https://github.com/Zaibot/activitylogger-aggregator">github.com/Zaibot/activitylogger-aggregator</WebLink><br />
          <WebLink href="https://github.com/Zaibot/activitylogger-website">github.com/Zaibot/activitylogger-website</WebLink><br />
        </p>
      </View>
    </Screen>
  ));
