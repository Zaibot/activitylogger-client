import React from 'react';
import { PureConnect } from 'react-redux-pure';
import Icon from '../icon';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`CounterMeeting`)(
  (state: State) => ({
    meetings: selectors.stats(state).meetings,
  }),
  null,
  ({ meetings }) => (
    <div><Icon value={`people`} /> {meetings} meeting(s)</div>
  ));
