import { Title } from '@zaibot/activitylogger-react';
import * as React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import WebLink from '../WebLink';
import cx from './style.less';

export default PureConnect(`Header`)(
  (state) => ({
    busy: selectors.client(state).busy,
    offline: !selectors.client(state).online,
    online: selectors.client(state).online,
  }),
  () => ({
  }),
  ({ busy, offline }) => (
    <div className={cx(`header`)}>
      <div className={cx(`logo`, { busy, offline })}>
        <Title>Activity Logger{offline ? ' Offline' : ''}{busy ? '...' : ''}</Title>
      </div>
      <div className={cx(`sysactions`)}>
        {/*offline ? null : <WebLink href={`https://al.zaibot.net/#token=NOT_IMPLEMENTED_YET`}><Icon value={`open_in_browser`} size={48} /></WebLink>*/}
        {<WebLink href={`https://al.zaibot.net/#token=NOT_IMPLEMENTED_YET`}>Dashboard</WebLink>}
      </div>
    </div>
  ),
);
