import * as actions from '../actions';
import { isType, Action } from '../actions';
import { Window } from './Window';
import { Folder } from './Folder';
import { Meeting } from './Meeting';
import { Interaction } from './Interaction';
import { TimelineCreate } from './TimelineCreate';
import { Status } from './Status';

export type Task = {
  id: string;
  type: string;
  status: Status;
  creationTime: number;
  finishTime: number;
  data: Interaction | Window | Folder | TimelineCreate | Meeting;
};
export type State = {
  tasks: Task[];
};
const emptyState: State = {
  tasks: [],
};

const outOfDate = (date: number, a: Task) => a.status === StatusSent && date - a.finishTime > 60000;

const reducerTask = (task: Task, action: Action<any>): Task => {
  if (isType(actions.BUFFER_SUCCESS, action)) {
    if (task.id === action.payload.id) {
      task = { ...task, status: StatusSent, finishTime: action.payload.finishTime };
    }
  }
  if (isType(actions.BUFFER_ERROR, action)) {
    if (task.id === action.payload.id) {
      task = { ...task, status: StatusError, finishTime: action.payload.finishTime };
    }
  }
  if (isType(actions.BUFFER_BUSY, action)) {
    if (task.id === action.payload.id) {
      task = { ...task, status: StatusSending };
    }
  }
  return task;
};

export default (state = emptyState, action: Action<any>) => {
  if (isType(actions.BUFFER_QUEUE, action)) {
    const id = action.payload.id;
    const type = action.payload.type;
    const creationTime = action.payload.creationTime;
    const status = StatusWaiting;
    const finishTime = 0;
    const data = action.payload.data;
    const tasks = [...state.tasks, { id, type, creationTime, status, finishTime, data }];
    state = { tasks };
  }
  if (isType(actions.BUFFER_SUCCESS, action) || isType(actions.BUFFER_ERROR, action) || isType(actions.BUFFER_BUSY, action)) {
    const tasks = state.tasks.map((task) => reducerTask(task, action));
    state = { tasks };
  }
  if (isType(actions.CLEAN_BUFFER, action)) {
    const time = action.payload.currentTime;
    const tasks = state.tasks.filter((task) => !outOfDate(time, task));
    state = { tasks };
  }
  return state;
};
