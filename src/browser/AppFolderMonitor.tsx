import { Button, Caption, Screen, Title } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import * as actions from '../actions';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`AppFolderMonitor`)(
  (state: State) => ({
    folder: selectors.folder(state),
  }),
  (dispatch) => ({
    onBrowse: () => dispatch(actions.MONITORFOLDER_BROWSE({})),
    onCancel: () => dispatch(actions.MONITORFOLDER_CANCEL({})),
    onCommit: (folder: string) => dispatch(actions.MONITORFOLDER_COMMIT({ folder })),
    onFolderChanged: (value: string) => dispatch(actions.MONITORFOLDER_CHANGED_FOLDER({ value })),
  }),
  ({ folder: { folder }, onBrowse, onFolderChanged, onCancel, onCommit }) => (
    <Screen>
      <Title>Add folder to monitor</Title>
      <div><Caption>Folder</Caption><br /><input type="text" size={40} value={folder} onChange={(e) => onFolderChanged(e.target.value)} /> <Button onClick={onBrowse}>Browse</Button></div>
      <div><Caption>Processors</Caption><br /><ul><li>GIT repository</li></ul></div>
      <div><Button primary onClick={() => onCommit(folder)}>Start monitoring</Button> <Button secondary onClick={onCancel}>Cancel</Button></div>
    </Screen>
  ));
