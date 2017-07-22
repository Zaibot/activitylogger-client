import { Store } from 'redux';
import State from '../store/state';
import * as actions from '../actions';
import keyboard from '@zaibot/ll-keyboard-hook-win';
import mouse from '@zaibot/ll-mouse-hook-win';

export default (store: Store<State>) => {
  keyboard.on('up', () => {
    store.dispatch(actions.KEY_PRESSED({}));
  });
  mouse.on('up', () => {
    store.dispatch(actions.MOUSE_PRESSED({}));
  });
}
