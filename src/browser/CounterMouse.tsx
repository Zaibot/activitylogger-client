import React from 'react';
import { PureConnect } from 'react-redux-pure';
import Icon from '../icon';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`CounterMouse`)(
  (state: State) => ({
    recording: selectors.stats(state),
  }),
  null,
  ({ recording }) => (
    <div>
      <Icon value={`mouse`} /> <span>{recording.mousepresses} clicks</span>
    </div>
  ));
