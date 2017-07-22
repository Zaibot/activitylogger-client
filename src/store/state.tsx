import { State as Buffer } from '../buffer/reducer';
import { State as Client } from '../client/reducer';
import { State as Config } from '../config/reducer';
import { State as Folder } from '../folder/reducer';
import { State as Idle } from '../monitor/idle/reducer';
import { State as Invite } from '../invite/reducer';
import { State as Recording } from '../recording/reducer';
import { State as Stats } from '../stats/reducer';
import { State as Time } from '../time/reducer';
import { State as UserReturned } from '../userReturned/reducer';
import { State as View } from '../view/reducer';
import { State as Window } from '../window/reducer';

type State = {
  buffer: Buffer;
  client: Client;
  config: Config;
  folder: Folder;
  idle: Idle;
  invite: Invite;
  recording: Recording;
  stats: Stats;
  time: Time;
  userReturned: UserReturned;
  view: View;
  window: Window;
};
export default State;
