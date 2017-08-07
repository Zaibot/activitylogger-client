import React from "react";

import Icon from '../icon';
import State from '../store/state';
import cx from './style.less';
import { Folder, Status, Interaction, Window, TimelineCreate, Meeting } from "../buffer";
import { PureConnect } from "react-redux-pure";
import { Task } from "../buffer/reducer";
import CancelBuffer from "./CancelBuffer";

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === Status.Waiting) {
    return <Icon value={`access_time`} />;
  } else if (status === Status.Sending) {
    return <Icon value={`file_upload`} />;
  } else if (status === Status.Sent) {
    return <Icon value={`check`} />;
  } else if (status === Status.Error) {
    return <Icon value={`warning`} />;
  } else if (status === Status.Cancelled) {
    return <Icon value={`delete`} />;
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
