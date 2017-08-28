import * as React from 'react';
import cx from './style.less';
export default ({ value, size }: { value: string; size?: number; }) => (
  <span className={cx(`icon`)} style={{ fontSize: size }}>{value}</span>
);
