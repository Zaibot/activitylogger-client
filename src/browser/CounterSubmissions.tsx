import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import selectors from '../store/selectors';
import Icon from '../icon';

export default PureConnect(`CounterSubmissions`)(
  (state: State) => ({
    stats: selectors.stats(state),
  }),
  null,
  ({ stats }) => (
    <div>
      <Icon value={`cloud_upload`} /> {stats.submissionSuccess} submitted ({stats.submissionErrors} errors)
    </div>
  ));
