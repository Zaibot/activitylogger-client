import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';
import Icon from '../icon';

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
