import { Button, Caption, Label } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import * as actions from '../actions';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`PageConfig`)(
  (state: State) => ({
    serverUrl: selectors.config(state).serverUrl,
    sourceId: selectors.config(state).sourceId,
    statusConnection: selectors.statusConnection(state),
    timelineId: selectors.config(state).timelineId,
  }),
  (dispatch) => ({
    onChangeServerUrl: (value: string) => dispatch(actions.CHANGED_SERVER({ value })),
    onChangeSource: (value: string) => dispatch(actions.CHANGED_SOURCE({ value })),
    onChangeTimeline: (value: string) => dispatch(actions.CHANGED_TIMELINE({ value })),
    onGenerateSource: () => dispatch(actions.GENERATE_SOURCE({})),
    onGenerateTimeline: () => dispatch(actions.GENERATE_TIMELINE({})),
    onResetServer: () => dispatch(actions.RESET_SERVER({})),
  }),
  ({ statusConnection, serverUrl, sourceId, timelineId, onResetServer, onChangeServerUrl, onChangeSource, onChangeTimeline, onGenerateTimeline, onGenerateSource }) => (
    <div>
      <div><Caption>Server URL</Caption><br /><input type="text" value={serverUrl} onChange={(e) => onChangeServerUrl(e.target.value)} /> <Button secondary onClick={onResetServer}>Default</Button></div>
      <div><Label>{statusConnection}</Label></div>
      <div><Caption>Timeline ID</Caption><br /><input type="text" value={timelineId} onChange={(e) => onChangeTimeline(e.target.value)} /> <Button secondary onClick={onGenerateTimeline}>Generate</Button></div>
      <div><Caption>Source ID</Caption><br /><input type="text" value={sourceId} onChange={(e) => onChangeSource(e.target.value)} /> <Button secondary onClick={onGenerateSource}>Machine Name</Button></div>
      <div>
        <Caption>Track</Caption>
        <div><Label><input type="checkbox" checked /> Interactions</Label></div>
        <div><Label><input type="checkbox" checked /> Applications</Label></div>
        <div><Label><input type="checkbox" checked /> Folders</Label></div>
      </div>
    </div>
  ));
