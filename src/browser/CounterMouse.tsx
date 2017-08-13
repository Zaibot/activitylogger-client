import { Icon, Label } from '@zaibot/activitylogger-react';
import React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`CounterMouse`)(
  (state: State) => ({
    recording: selectors.stats(state),
  }),
  null,
  ({ recording }) => (
    <div>
      <Label><Icon iconSize={`24px` as any}>mouse</Icon> {recording.mousepresses} clicks</Label>
    </div>
  ));
