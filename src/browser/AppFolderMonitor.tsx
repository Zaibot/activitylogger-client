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
    <div>
      <h1>Add folder to monitor</h1>
      <div><label>Folder:<br /><input type="text" size={40} value={folder} onChange={(e) => onFolderChanged(e.target.value)} /></label> <button onClick={onBrowse}>Browse</button></div>
      <div><label>Processors:</label><br /><ul><li>GIT repository</li></ul></div>
      <div><button onClick={() => onCommit(folder)}>Start monitoring</button> <button onClick={onCancel}>Cancel</button></div>
    </div>
  ));
