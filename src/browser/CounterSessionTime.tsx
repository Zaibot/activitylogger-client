import { Icon, Label } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import State from '../store/state';
import Duration from './Duration';

export default PureConnect(`CounterSessionTime`)(
  (state: State) => ({
    recording: selectors.statsDuration(state),
  }),
  null,
  ({ recording }) =>
    <div>
      <Label><Icon iconSize={`24px` as any}>access_time</Icon> <Duration duration={recording} /> session time</Label>
    </div>,
);
