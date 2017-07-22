import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';
import Icon from '../icon';

export default PureConnect(`CounterKey`)(
  (state: State) => ({
    recording: selectors.stats(state),
  }),
  null,
  ({ recording }) => (
    <div>
      <Icon value={`keyboard`} /> <span>{recording.keypresses} key presses</span>
    </div>
  ));
