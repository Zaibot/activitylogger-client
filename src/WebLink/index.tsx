import React from 'react';
import { shell } from 'electron';
import cx from './style.less';

export default ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a className={cx(`web-link`)} href={href} onClick={(e) => { e.preventDefault(); shell.openExternal(href); }}>{children}</a>
);
