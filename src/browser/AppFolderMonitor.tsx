import { Caption, Screen, Title } from '@zaibot/activitylogger-react';
import React from 'react';
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
    onFolderChanged: (value: string) => dispatch(actions.MONITORFOLDER_CHANGED_FOLDER({ value })),
    onCancel: () => dispatch(actions.MONITORFOLDER_CANCEL({})),
    onCommit: (folder: string) => dispatch(actions.MONITORFOLDER_COMMIT({ folder })),
  }),
  ({ folder: { folder }, onBrowse, onFolderChanged, onCancel, onCommit }) => (
    <Screen>
      <Title>Add folder to monitor</Title>
      <div><Caption>Folder</Caption><br /><input type="text" size={40} value={folder} onChange={(e) => onFolderChanged(e.target.value)} /> <button onClick={onBrowse}>Browse</button></div>
      <div><Caption>Processors</Caption><br /><ul><li>GIT repository</li></ul></div>
      <div><button onClick={() => onCommit(folder)}>Start monitoring</button> <button onClick={onCancel}>Cancel</button></div>
    </Screen>
  ));
