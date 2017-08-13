import { Caption, Label } from '@zaibot/activitylogger-react';
import React from 'react';
import { PureConnect } from 'react-redux-pure';
import * as actions from '../actions';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`PageConfig`)(
  (state: State) => ({
    statusConnection: selectors.statusConnection(state),
    serverUrl: selectors.config(state).serverUrl,
    sourceId: selectors.config(state).sourceId,
    timelineId: selectors.config(state).timelineId,
  }),
  (dispatch) => ({
    onChangeServerUrl: (value: string) => dispatch(actions.CHANGED_SERVER({ value })),
    onChangeSource: (value: string) => dispatch(actions.CHANGED_SOURCE({ value })),
    onChangeTimeline: (value: string) => dispatch(actions.CHANGED_TIMELINE({ value })),
    onResetServer: () => dispatch(actions.RESET_SERVER({})),
    onGenerateTimeline: () => dispatch(actions.GENERATE_TIMELINE({})),
    onGenerateSource: () => dispatch(actions.GENERATE_SOURCE({})),
  }),
  ({ statusConnection, serverUrl, sourceId, timelineId, onResetServer, onChangeServerUrl, onChangeSource, onChangeTimeline, onGenerateTimeline, onGenerateSource }) => (
    <div>
      <div><Caption>Server URL</Caption><br /><input type="text" value={serverUrl} onChange={(e) => onChangeServerUrl(e.target.value)} /> <button onClick={onResetServer}>Default</button></div>
      <div><Label>{statusConnection}</Label></div>
      <div><Caption>Timeline ID</Caption><br /><input type="text" value={timelineId} onChange={(e) => onChangeTimeline(e.target.value)} /> <button onClick={onGenerateTimeline}>Generate</button></div>
      <div><Caption>Source ID</Caption><br /><input type="text" value={sourceId} onChange={(e) => onChangeSource(e.target.value)} /> <button onClick={onGenerateSource}>Machine Name</button></div>
      <div>
        <Caption>Track</Caption>
        <div><Label><input type="checkbox" checked /> Interactions</Label></div>
        <div><Label><input type="checkbox" checked /> Applications</Label></div>
        <div><Label><input type="checkbox" checked /> Folders</Label></div>
      </div>
    </div>
  ));
