import { Caption, Label, Screen, Title, Button } from '@zaibot/activitylogger-react';
import React from 'react';
import { PureConnect } from 'react-redux-pure';
import * as actions from '../actions';
import selectors from '../store/selectors';
import State from '../store/state';
import Duration from './Duration';

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
    <Screen>
      <Title>Welcome back!</Title>
      <div><Caption>You were away for</Caption><br /><Label><Duration duration={timeEnd - timeStart} /> since {formatter.format(timeStart)}</Label></div>
      <div><Caption>Title</Caption><br /><input type="text" size={40} value={title} onChange={(e) => onTitleChanged(e.target.value)} /></div>
      <div><Caption>Description</Caption><br /><textarea cols={40} rows={10} value={description} onChange={(e) => onDescriptionChanged(e.target.value)} /></div>
      <div><Button primary onClick={() => onCommit(timeStart, timeEnd, title, description)}>Log this as meeting</Button> <Button secondary onClick={onSkip}>Skip</Button></div>
    </Screen>
  ));
