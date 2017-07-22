import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';
import Icon from '../icon';
import cx from './style.less';

export default PureConnect(`CounterFolder`)(
  (state: State) => ({
    folders: selectors.stats(state).folders.length,
    folderLast: selectors.folderLast(state),
  }),
  null,
  ({ folders, folderLast }) => (
    <div><Icon value={`folder`} /> {folders} folders(s)<br /><span className={cx(`stats-detail`)}>{folderLast}</span></div>
  ));
