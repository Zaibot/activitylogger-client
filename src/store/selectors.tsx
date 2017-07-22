import { createSelector } from 'reselect';
import State from './state';

const buffer = (state: State) => state.buffer;
const client = (state: State) => state.client;
const config = (state: State) => state.config;
const folder = (state: State) => state.folder;
const invite = (state: State) => state.invite;
const recording = (state: State) => state.recording;
const stats = (state: State) => state.stats;
const time = (state: State) => state.time;
const userReturned = (state: State) => state.userReturned;
const view = (state: State) => state.view;
const window = (state: State) => state.window;

const hasPendingFolder = (state: State) => state.folder.active;
const hasPendingInvite = (state: State) => state.invite.active;
const hasPendingUserReturned = (state: State) => state.userReturned.active;

const appTime = (state: State) => state.time.time;
const durationIdle = (state: State) => state.time.time - state.idle.lastInteraction;
const durationIdleReal = (state: State) => state.idle.lastIdle < state.idle.lastInteraction ? Math.max(0, state.time.time - state.idle.lastInteraction) : Math.max(0, state.time.time - state.idle.lastIdle);
const folderLast = (state: State) => state.stats.folders[state.stats.folders.length - 1];
const isIdle = (state: State) => state.time.time > state.idle.lastInteraction + state.config.idleTimeout;
const recordingDuration = (state: State) => roundTime(state.time.time) - roundTime(state.recording.timeStart);
const roundTime = (time: number) => time - (time % 100);
const statsDuration = (state: State) => roundTime(state.time.time) - roundTime(state.stats.timeStart);
const timeIdle = (state: State) => state.idle.lastIdle;
const timeInteraction = (state: State) => state.idle.lastInteraction;
const windowTitleLast = (state: State) => state.stats.windows[state.stats.windows.length - 1];

const statusConnection = createSelector(
  (state: State) => state.client.online,
  (state: State) => state.client.busy,
  (online, busy) => busy ? 'busy...' : online ? 'connected' : 'disconnected',
);
const isConnected = (state: State) => state.client.online;
const isDisconnected = (state: State) => !state.client.online;
const isRecordingFull = createSelector(
  config,
  recording,
  recordingDuration,
  (
    { maxDuration, maxWindows, maxFolders, maxKeyPresses, maxMousePresses },
    { timeStart, windows, folders, keypresses, mousepresses },
    duration,
  ) => duration >= maxDuration
      || windows.length > maxWindows
      || folders.length > maxFolders
      || keypresses >= maxKeyPresses
      || mousepresses >= maxMousePresses,
);

const windowVisible = (state: State) => state.window.visible;

export default {
  appTime,
  buffer,
  client,
  config,
  durationIdle,
  durationIdleReal,
  folder,
  folderLast,
  hasPendingFolder,
  hasPendingInvite,
  hasPendingUserReturned,
  invite,
  isConnected,
  isDisconnected,
  isIdle,
  isRecordingFull,
  recording,
  recordingDuration,
  stats,
  statsDuration,
  statusConnection,
  timeIdle,
  timeInteraction,
  userReturned,
  view,
  windowTitleLast,
  windowVisible,
};
