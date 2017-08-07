import React from "react";

import Icon from '../icon';
import State from '../store/state';
import cx from './style.less';
import { Task } from "../buffer/reducer";
import { PureConnect } from "react-redux-pure";
import * as actions from '../actions';
import { Status } from "../buffer";

export default PureConnect<{ item: Task }>(`PageBuffer`)(
  null,
  (dispatch, props) => ({
    onCancel: () => dispatch(actions.BUFFER_CANCEL({ id: props.item.id, time: Date.now() }))
  }),
  ({ item, onCancel }) => (
    item.status === Status.Error ? <button onClick={onCancel}>remove</button> : null
  ));
