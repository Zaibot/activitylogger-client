import React from 'react';
import { PureConnect } from 'react-redux-pure';
import Icon from '../icon';
import selectors from '../store/selectors';
import State from '../store/state';
import Duration from './Duration';

export default PureConnect(`CounterSessionTime`)(
  (state: State) => ({
    recording: selectors.statsDuration(state),
  }),
  null,
  ({ recording }) =>
    <div><Icon value={`access_time`} /> <Duration duration={recording} /> session time</div>,
);
