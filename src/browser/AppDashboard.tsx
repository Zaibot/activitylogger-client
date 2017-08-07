import { createSelector } from 'reselect';
import { PureConnect } from 'react-redux-pure';
import React from 'react';
import uuid from 'uuid';

import { Status } from '../buffer';
import * as actions from '../actions';
import CounterFolder from './CounterFolder';
import CounterIdleTime from './CounterIdleTime';
import CounterKey from './CounterKey';
import CounterMeeting from './CounterMeeting';
import CounterMouse from './CounterMouse';
import CounterSessionTime from './CounterSessionTime';
import CounterSubmissions from './CounterSubmissions';
import CounterWindow from './CounterWindow';
import cx from './style.less';
import Header from './Header';
import Icon from '../icon';
import PageAdvanced from './PageAdvanced';
import PageAuth from './PageAuth';
import PageBuffer from './PageBuffer';
import PageConfig from './PageConfig';
import selectors from '../store/selectors';
import State from '../store/state';
import View from '../view/View';
import ViewSelector from '../view/Selector';
import WebLink from '../WebLink';

export default PureConnect(`AppDashboard`)(
  (state: State) => ({
    pendingBuffer: state.buffer.tasks.some((x) => x.status !== Status.Sent),
    offline: selectors.isDisconnected(state),
    windowTitleLast: selectors.windowTitleLast(state),
  }),
  (dispatch) => ({
    onInvite: () => dispatch(actions.INVITE_INIT({ timelineId: uuid.v4() }))
  }),
  ({ offline, pendingBuffer, windowTitleLast, onInvite }) => (
    <div>
      <Header />
      <ViewSelector items={[
        { id: `Stats`, title: <Icon size={48} value={`home`} /> },
        { id: `Meeting`, title: <Icon size={48} value={`people`} /> },
        { id: `Folders`, title: <Icon size={48} value={`folder`} /> },
        { id: `Configuration`, title: <Icon size={48} value={`settings`} /> },
        { id: `Advanced`, title: <Icon size={48} value={`build`} /> },
        { id: `Auth`, title: <Icon size={48} value={`lock`} /> },
        { id: `Sync`, title: <Icon size={48} value={offline ? `cloud_queue` : pendingBuffer ? `cloud_upload` : `cloud_done`} /> },
        { id: `About`, title: <Icon size={48} value={`info`} /> }
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
        <button onClick={onInvite}>Invite another user</button>
      </View>
      <View name={`Meeting`}>
        <CounterMeeting />
      </View>
      <View name={`Folders`}>
        <CounterFolder />
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
    </div>
  ));
