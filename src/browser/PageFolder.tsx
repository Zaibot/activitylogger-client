import * as actions from '../actions';
import { Action, isType } from '../actions';
import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';

export default PureConnect(`PageFolder`)(
  (state: State) => ({
    statusConnection: selectors.statusConnection(state),
    serverUrl: selectors.config(state).serverUrl,
    sourceId: selectors.config(state).sourceId,
    timelineId: selectors.config(state).timelineId,
    folders: selectors.folder(state).folders,
  }),
  (dispatch) => ({
    onAddFolder: () => dispatch(actions.MONITORFOLDER_INIT({})),
  }),
  ({ folders, onAddFolder }) => (
    <div>
      <ul>
        {folders.map(({ path }) => <li>{path} (GIT)</li>)}
        {folders.length ? null : <li>No folders specified</li>}
      </ul>
      <button onClick={onAddFolder}>Add</button>
    </div>
  ));
