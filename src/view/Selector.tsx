import React from 'react';
import { PureConnect } from 'react-redux-pure';
import selectors from '../store/selectors';
import * as actions from '../actions';
import cx from './style.less';

export default PureConnect<{ items: { id: string; title: React.ReactChild; }[] }>(`Selector`)(
  (state) => ({
    view: selectors.view(state).current,
  }),
  (dispatch) => ({
    select: (view: string) => () => dispatch(actions.SELECT_VIEW({ view })),
  }),
  ({ items, view, select }) => (
    <ul className={cx(`list`)}>
      {items.map((item) => <li className={cx(`item`, { active: view === item.id })} onClick={select(item.id)}>{item.title}</li>)}
    </ul>
  )
)
