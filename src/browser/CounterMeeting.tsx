import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';
import Icon from '../icon';
import cx from './style.less';

export default PureConnect(`CounterMeeting`)(
  (state: State) => ({
    meetings: selectors.stats(state).meetings,
  }),
  null,
  ({ meetings }) => (
    <div><Icon value={`people`} /> {meetings} meeting(s)</div>
  ));
