import * as keyboard from '@zaibot/ll-keyboard-hook-win';
import * as mouse from '@zaibot/ll-mouse-hook-win';
import { Store } from 'redux';
import * as actions from '../actions';
import State from '../store/state';

export default (store: Store<State>) => {
  keyboard.on('up', () => {
    store.dispatch(actions.KEY_PRESSED({}));
  });
  mouse.on('up', () => {
    store.dispatch(actions.MOUSE_PRESSED({}));
  });
};
