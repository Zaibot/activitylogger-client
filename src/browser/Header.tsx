import React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import WebLink from '../WebLink';
import cx from './style.less';

export default PureConnect(`Header`)(
  (state) => ({
    busy: selectors.client(state).busy,
    online: selectors.client(state).online,
    offline: !selectors.client(state).online,
  }),
  () => ({
  }),
  ({ busy, offline }) => (
    <div className={cx(`header`)}>
      <div className={cx(`logo`, { busy, offline })}>
        <h1>Activity Logger{offline ? ' Offline' : ''}{busy ? '...' : ''}</h1>
      </div>
      <div className={cx(`sysactions`)}>
        {/*offline ? null : <WebLink href={`https://al.zaibot.net/#token=NOT_IMPLEMENTED_YET`}><Icon value={`open_in_browser`} size={48} /></WebLink>*/}
        {<WebLink href={`https://al.zaibot.net/#token=NOT_IMPLEMENTED_YET`}>Dashboard</WebLink>}
      </div>
    </div>
  ),
);
