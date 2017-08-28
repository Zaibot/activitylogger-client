import * as Electron from 'electron';
import * as url from 'url';
import Config from '../config';

const durationKeepMainWindowAlive = 30000;

let mainWindow: Electron.BrowserWindow = null;
let closeTimeout: any;
const closing = () => {
  if (closeTimeout) { return; }
  closeTimeout = setTimeout(() => {
    closeTimeout = null;
    mainWindow.close();
  }, durationKeepMainWindowAlive);
};
const cancelClosing = () => {
  clearTimeout(closeTimeout);
  closeTimeout = null;
};
export default {
  hide(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!mainWindow) { return resolve(); }
      if (!mainWindow.isVisible()) { return resolve(); }
      mainWindow.once('hide', resolve);
      mainWindow.hide();
    });
  },
  wait(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!mainWindow) { return resolve(); }
      if (!mainWindow.isVisible()) { return resolve(); }
      mainWindow.once('hide', resolve);
    });
  },
  show(): Promise<void> {
    return new Promise((resolve, reject) => {
      cancelClosing();
      if (mainWindow) {
        mainWindow.once('show', resolve);
        mainWindow.show();
        return;
      }
      // Create the browser window.
      const pathIcon = Config.resolveStatic('ic_access_time_black_24dp_1x.png');
      mainWindow = new Electron.BrowserWindow({
        // darkTheme: true,
        // frame: false,
        // height: 500,
        // width: 1200,
        alwaysOnTop: true,
        autoHideMenuBar: true,
        backgroundColor: '#fff',
        height: 550,
        icon: pathIcon,
        minHeight: 200,
        minWidth: 300,
        show: false,
        skipTaskbar: true,
        title: 'One moment... Activity Logger',
        useContentSize: true,
        width: 600,
        zoomToPageWidth: true,
      });
      mainWindow.loadURL(url.format({
        pathname: Config.resolveStatic('index.html'),
        protocol: 'file:',
        slashes: true,
      }));
      mainWindow.on('hide', () => {
        closing();
      });
      mainWindow.on('closed', () => {
        cancelClosing();
        mainWindow = null;
      });
      // mainWindow.on('show', () => {
      //   mainWindow.webContents.openDevTools();
      // });
      mainWindow.once('show', resolve);
      mainWindow.show();
    });
  },
};
