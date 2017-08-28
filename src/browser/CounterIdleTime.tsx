import { Icon, Label } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import State from '../store/state';
import Duration from './Duration';

export default PureConnect(`CounterIdleTime`)(
  (state: State) => ({
    durationIdleReal: selectors.durationIdleReal(state),
    isIdle: selectors.isIdle(state),
  }),
  null,
  ({ durationIdleReal, isIdle }) =>
    <div>
      <Label><Icon iconSize={`24px` as any}>free_breakfast</Icon> <Duration duration={durationIdleReal} /> idle {isIdle ? '(afk)' : ''}</Label>
    </div>,
);
