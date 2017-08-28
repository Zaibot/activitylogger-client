import { Button, Label, Reference } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import * as actions from '../actions';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`PageFolder`)(
  (state: State) => ({
    folders: selectors.folder(state).folders,
    serverUrl: selectors.config(state).serverUrl,
    sourceId: selectors.config(state).sourceId,
    statusConnection: selectors.statusConnection(state),
    timelineId: selectors.config(state).timelineId,
  }),
  (dispatch) => ({
    onAddFolder: () => dispatch(actions.MONITORFOLDER_INIT({})),
  }),
  ({ folders, onAddFolder }) => (
    <div>
      <ul>
        {folders.map(({ path }) => <li><Label>{path}</Label> <Reference>GIT</Reference></li>)}
        {folders.length ? null : <li>No folders specified</li>}
      </ul>
      <Button primary onClick={onAddFolder}>Add</Button>
    </div>
  ));
