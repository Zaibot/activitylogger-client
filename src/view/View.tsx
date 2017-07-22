import React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import * as actions from '../actions';
import cx from './style.less';

export default PureConnect<{ name: string }>(`View`)(
  (state) => ({
    current: selectors.view(state).current,
  }),
  null,
  ({ name, current, children }) => (
    name === current ? <div className={cx(`view`)}>{children}</div> : null
  )
)
