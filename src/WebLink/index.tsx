import { Reference } from '@zaibot/activitylogger-react';
import { shell } from 'electron';
import * as React from 'react';
import cx from './style.less';

export default ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a className={cx(`web-link`)} href={href} onClick={(e) => { e.preventDefault(); shell.openExternal(href); }}><Reference>{children}</Reference></a>
);
