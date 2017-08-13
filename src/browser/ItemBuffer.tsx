import { Icon } from '@zaibot/activitylogger-react';
import React from 'react';

import { PureConnect } from 'react-redux-pure';
import { Folder, Interaction, Meeting, Status, TimelineCreate, Window } from '../buffer';
import { Task } from '../buffer/reducer';
import CancelBuffer from './CancelBuffer';
import cx from './style.less';

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === Status.Waiting) {
    return <Icon align iconSize={`24px` as any}>access_time</Icon>;
  } else if (status === Status.Sending) {
    return <Icon align iconSize={`24px` as any}>file_upload</Icon>;
  } else if (status === Status.Sent) {
    return <Icon align iconSize={`24px` as any}>check</Icon>;
  } else if (status === Status.Error) {
    return <Icon align iconSize={`24px` as any}>warning</Icon>;
  } else if (status === Status.Cancelled) {
    return <Icon align iconSize={`24px` as any}>delete</Icon>;
  }
};

const formatter = new Intl.DateTimeFormat([], { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', weekday: 'short' });

export default PureConnect<{ item: Task }>(`PageBuffer`)(
  null,
  null,
  ({ item }) => {
    if (item.type === `folder`) {
      const data = item.data as Folder;
      return (
        <div className={cx(`buffer-item`, item.type)}>
          <div className={cx(`buffer-field`)}><StatusIcon status={item.status} /> {item.type}</div>
          <div className={cx(`buffer-field`)}>{formatter.format(data.timeStart)}</div>
          <div className={cx(`buffer-field`)}>{formatter.format(data.timeEnd)}</div>
          <div className={cx(`buffer-field`)}>{data.folders.length}</div>
        </div>
      );
    }
    if (item.type === `interaction`) {
      const data = item.data as Interaction;
      return (
        <div className={cx(`buffer-item`, item.type)}>
          <div className={cx(`buffer-field`)}><StatusIcon status={item.status} /> {item.type}</div>
          <div className={cx(`buffer-field`)}>{formatter.format(data.timeStart)}</div>
          <div className={cx(`buffer-field`)}>{formatter.format(data.timeEnd)}</div>
          <div className={cx(`buffer-field`, `buffer-keypresses`)}>{data.keypresses}</div>
          <div className={cx(`buffer-field`, `buffer-mousepresses`)}>{data.mousepresses}</div>
        </div>
      );
    }
    if (item.type === `window`) {
      const data = item.data as Window;
      return (
        <div className={cx(`buffer-item`, item.type)}>
          <div className={cx(`buffer-field`)}><StatusIcon status={item.status} /> {item.type}</div>
          <div className={cx(`buffer-field`)}>{formatter.format(data.timeStart)}</div>
          <div className={cx(`buffer-field`)}>{formatter.format(data.timeEnd)}</div>
          <div className={cx(`buffer-field`)}>{data.windows.length}</div>
        </div>
      );
    }
    if (item.type === `meeting`) {
      const data = item.data as Meeting;
      return (
        <div className={cx(`buffer-item`, item.type)}>
          <div className={cx(`buffer-field`)}><StatusIcon status={item.status} /> {item.type}</div>
          <div className={cx(`buffer-field`)}>{formatter.format(data.timeStart)}</div>
          <div className={cx(`buffer-field`)}>{formatter.format(data.timeEnd)}</div>
          <div className={cx(`buffer-field`)}>{data.title}</div>
        </div>
      );
    }
    if (item.type === `timelineCreate`) {
      const data = item.data as TimelineCreate;
      return (
        <div className={cx(`buffer-item`, item.type)}>
          <div className={cx(`buffer-field`)}><StatusIcon status={item.status} /> Create timeline <CancelBuffer item={item} /></div>
          <div className={cx(`buffer-field`)}>{formatter.format(item.creationTime)}</div>
          <div className={cx(`buffer-field`)} />
          <div className={cx(`buffer-field`)}>{data.timelineId}</div>
        </div>
      );
    }
    return (
      <div className={cx(`buffer-item`, item.type)}>
        {item.type}
      </div>
    );
  });
