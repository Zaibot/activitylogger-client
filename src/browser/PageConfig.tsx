import * as actions from '../actions';
import { Action, isType } from '../actions';
import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';

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
      <div><label>Server URL:</label><br /><input type="text" value={serverUrl} onChange={(e) => onChangeServerUrl(e.target.value)} /> <button onClick={onResetServer}>Default</button></div>
      <div>{statusConnection}</div>
      <div><label>Timeline ID:</label><br /><input type="text" value={timelineId} onChange={(e) => onChangeTimeline(e.target.value)} /> <button onClick={onGenerateTimeline}>Generate</button></div>
      <div><label>Source ID:</label><br /><input type="text" value={sourceId} onChange={(e) => onChangeSource(e.target.value)} /> <button onClick={onGenerateSource}>Machine Name</button></div>
      <h2>Track</h2>
      <div><label><input type="checkbox" checked /> Interactions</label></div>
      <div><label><input type="checkbox" checked /> Applications</label></div>
      <div><label><input type="checkbox" checked /> Folders</label></div>
    </div>
  ));
