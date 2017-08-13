import { Caption } from '@zaibot/activitylogger-react';
import React from 'react';
import { PureConnect } from 'react-redux-pure';
import { createSelector } from 'reselect';

import { Status } from '../buffer';
import State from '../store/state';
import ItemBuffer from './ItemBuffer';

const queueItems = createSelector(
  (state: State) => state.buffer.tasks,
  (tasks) => {
    return tasks.slice(0).sort((a, b) => b.creationTime - a.creationTime);
  },
);
const queueLength = createSelector(
  queueItems,
  (combined) => combined.reduce((state, cur) => state + (cur.status !== Status.Sent ? 1 : 0), 0),
);
export default PureConnect(`PageBuffer`)(
  (state: State) => ({
    items: queueItems(state),
    queue: queueLength(state),
  }),
  (dispatch) => ({
  }),
  ({ items, queue }) => (
    <div>
      {queue ? (<Caption>{queue} submission(s) in queue</Caption>) : (<Caption>Server up-to-date</Caption>)}
      {items.slice(0, 10).map((item) => <ItemBuffer key={item.id} item={item} />)}
      {items.length > 10 ? <div>{items.length - 10} more items</div> : null}
    </div>
  ));
