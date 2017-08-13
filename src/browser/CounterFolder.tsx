import { Icon, Label, Reference } from '@zaibot/activitylogger-react';
import React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`CounterFolder`)(
  (state: State) => ({
    folders: selectors.stats(state).folders.length,
    folderLast: selectors.folderLast(state),
  }),
  null,
  ({ folders, folderLast }) => (
    <div>
      <Label><Icon iconSize={`24px` as any}>folder</Icon> <span>{folders} folders(s)</span></Label>
      <br />
      <Reference>{folderLast}</Reference>
    </div>
  ));
