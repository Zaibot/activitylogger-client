import { Icon, Label } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`CounterMeeting`)(
  (state: State) => ({
    meetings: selectors.stats(state).meetings,
  }),
  null,
  ({ meetings }) => (
    <div>
      <Label><Icon iconSize={`24px` as any}>people</Icon> {meetings} meeting(s)</Label>
    </div>
  ));
