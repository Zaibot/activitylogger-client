import { Icon, Label, Reference } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`CounterWindow`)(
  (state: State) => ({
    windowTitleLast: selectors.windowTitleLast(state),
    windows: selectors.stats(state).windows.length,
  }),
  null,
  ({ windows, windowTitleLast }) => (
    <div>
      <Label><Icon iconSize={`24px` as any}>web_asset</Icon> {windows} application(s)</Label>
      <br />
      <Reference>{windowTitleLast}</Reference>
    </div>
  ));
