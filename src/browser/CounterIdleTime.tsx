import React from 'react';
import { PureConnect } from 'react-redux-pure';
import Icon from '../icon';
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
    <div><Icon value={`free_breakfast`} /> <Duration duration={durationIdleReal} /> idle {isIdle ? '(afk)' : ''}</div>,
);
