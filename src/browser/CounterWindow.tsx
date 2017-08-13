import { Icon, Label, Reference } from '@zaibot/activitylogger-react';
import React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import State from '../store/state';

export default PureConnect(`CounterWindow`)(
  (state: State) => ({
    windows: selectors.stats(state).windows.length,
    windowTitleLast: selectors.windowTitleLast(state),
  }),
  null,
  ({ windows, windowTitleLast }) => (
    <div>
      <Label><Icon iconSize={`24px` as any}>web_asset</Icon> {windows} application(s)</Label>
      <br />
      <Reference>{windowTitleLast}</Reference>
    </div>
  ));
