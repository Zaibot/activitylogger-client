import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';
import Icon from '../icon';
import Duration from './Duration';

export default PureConnect(`CounterSessionTime`)(
  (state: State) => ({
    recording: selectors.statsDuration(state),
  }),
  null,
  ({ recording }) =>
    <div><Icon value={`access_time`} /> <Duration duration={recording} /> session time</div>
);
