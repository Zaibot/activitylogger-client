import { app } from 'electron';

export default [
  {
    role: 'help',
  },
  {
    label: 'Restart',
    click: () => {
      app.relaunch();
      app.quit();
    },
  },
  {
    role: 'quit',
  },
];
