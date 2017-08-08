import React from 'react';
import { PureConnect } from 'react-redux-pure';
import Icon from '../icon';
import selectors from '../store/selectors';
import State from '../store/state';

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
