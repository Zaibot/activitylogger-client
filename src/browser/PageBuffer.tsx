import { Action, isType } from '../actions';
import { createSelector } from 'reselect';
import { PureConnect } from 'react-redux-pure';
import { Status, StatusWaiting, StatusSending, StatusSent, StatusError } from '../buffer/Status';
import * as actions from '../actions';
import cx from './style.less';
import { Folder, Interaction, Window, Meeting, TimelineCreate } from '../buffer';
import Icon from '../icon';
import React from 'react';
import selectors from '../store/selectors';
import State from '../store/state';

const queueItems = createSelector(
  (state: State) => state.buffer.tasks,
  (tasks) => {
    return tasks.slice(0).sort((a, b) => b.creationTime - a.creationTime);
  }
)
const queueLength = createSelector(
  queueItems,
  (combined) => combined.reduce((state, cur) => state + (cur.status !== StatusSent ? 1 : 0), 0)
)
const formatter = new Intl.DateTimeFormat([], { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', weekday: 'short' });

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === StatusWaiting) {
    return <Icon value={`access_time`} />;
  } else if (status === StatusSending) {
    return <Icon value={`file_upload`} />;
  } else if (status === StatusSent) {
    return <Icon value={`check`} />;
  } else if (status === StatusError) {
    return <Icon value={`warning`} />;
  }
};

export default PureConnect(`PageBuffer`)(
  (state: State) => ({
    items: queueItems(state),
    queue: queueLength(state),
  }),
  (dispatch) => ({
  }),
  ({ items, queue }) => (
    <div>
      {queue ? (<h2>{queue} submission(s) in queue</h2>) : (<h2>Server up-to-date</h2>)}
      {items.slice(0, 10).map((item) => {
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
              <div className={cx(`buffer-field`)}><StatusIcon status={item.status} /> Create timeline</div>
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
      })}
      {items.length > 10 ? <div>{items.length - 10} more items</div> : null}
    </div>
  ));
