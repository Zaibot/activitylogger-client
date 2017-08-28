import { Icon, Label } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`CounterKey`)(
  (state: State) => ({
    recording: selectors.stats(state),
  }),
  null,
  ({ recording }) => (
    <div>
      <Label><Icon iconSize={`24px` as any}>keyboard</Icon> {recording.keypresses} key presses</Label>
    </div>
  ));
