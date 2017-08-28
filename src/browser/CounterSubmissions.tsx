import { Icon, Label } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`CounterSubmissions`)(
  (state: State) => ({
    stats: selectors.stats(state),
  }),
  null,
  ({ stats }) => (
    <div>
      <Label><Icon iconSize={`24px` as any}>cloud_upload</Icon> {stats.submissionSuccess} submitted ({stats.submissionErrors} errors)</Label>
    </div>
  ));
