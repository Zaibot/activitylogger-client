import { Icon, Label, Reference } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`CounterFolder`)(
  (state: State) => ({
    folderLast: selectors.folderLast(state),
    folders: selectors.stats(state).folders.length,
  }),
  null,
  ({ folders, folderLast }) => (
    <div>
      <Label><Icon iconSize={`24px` as any}>folder</Icon> <span>{folders} folders(s)</span></Label>
      <br />
      <Reference>{folderLast}</Reference>
    </div>
  ));
