import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';
import Icon from '../icon';
import Duration from './Duration';

export default PureConnect(`CounterIdleTime`)(
  (state: State) => ({
    durationIdleReal: selectors.durationIdleReal(state),
    isIdle: selectors.isIdle(state),
  }),
  null,
  ({ durationIdleReal, isIdle }) =>
    <div><Icon value={`free_breakfast`} /> <Duration duration={durationIdleReal} /> idle {isIdle ? '(afk)' : ''}</div>
);
