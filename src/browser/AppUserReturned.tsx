import * as actions from '../actions';
import { Action, isType } from '../actions';
import { PureConnect } from 'react-redux-pure';
import React from 'react';
import State from '../store/state';
import Duration from './Duration';
import selectors from '../store/selectors';

const formatter = new Intl.DateTimeFormat([], { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', weekday: 'short' });

export default PureConnect(`AppUserReturned`)(
  (state: State) => ({
    userReturned: selectors.userReturned(state),
  }),
  (dispatch) => ({
    onTitleChanged: (value: string) => dispatch(actions.USERRETURNED_TITLE_CHANGED({ value })),
    onDescriptionChanged: (value: string) => dispatch(actions.USERRETURNED_DESCRIPTION_CHANGED({ value })),
    onSkip: () => dispatch(actions.USERRETURNED_SKIP({})),
    onCommit: (timeStart: number, timeEnd: number, title: string, description: string) => dispatch(actions.USERRETURNED_COMMIT({ timeStart, timeEnd, title, description })),
  }),
  ({ userReturned: { title, description, timeStart, timeEnd }, onTitleChanged, onDescriptionChanged, onSkip, onCommit }) => (
    <div>
      <h1>Welcome back!</h1>
      <div><h2>You were away for</h2><span><Duration duration={timeEnd - timeStart} /> since {formatter.format(timeStart)}</span></div>
      <div><label>Title:<br /><input type="text" size={40} value={title} onChange={(e) => onTitleChanged(e.target.value)} /></label></div>
      <div><label>Description:<br /><textarea cols={40} rows={10} value={description} onChange={(e) => onDescriptionChanged(e.target.value)} /></label></div>
      <div><button onClick={() => onCommit(timeStart, timeEnd, title, description)}>Log this as meeting</button> <button onClick={onSkip}>Skip</button></div>
    </div>
  ));
