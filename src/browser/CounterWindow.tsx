import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';
import Icon from '../icon';
import cx from './style.less';

export default PureConnect(`CounterWindow`)(
  (state: State) => ({
    windows: selectors.stats(state).windows.length,
    windowTitleLast: selectors.windowTitleLast(state),
  }),
  null,
  ({ windows, windowTitleLast }) => (
    <div><Icon value={`web_asset`} /> {windows} application(s)<br /><span className={cx(`stats-detail`)}>{windowTitleLast}</span></div>
  ));
