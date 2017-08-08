import Electron from 'electron';
import url from 'url';
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
        width: 600,
        height: 550,
        // width: 1200,
        // height: 500,
        useContentSize: true,
        minWidth: 300,
        minHeight: 200,
        alwaysOnTop: true,
        skipTaskbar: true,
        show: false,
        title: 'One moment... Activity Logger',
        autoHideMenuBar: true,
        zoomToPageWidth: true,
        // darkTheme: true,
        icon: pathIcon,
        backgroundColor: '#f0f0f0',
        // frame: false,
      });
      mainWindow.loadURL(url.format({
        pathname: Config.resolveStatic('index.html'),
        protocol: 'file:',
        slashes: true,
      }));
      mainWindow.on('hide', function() {
        closing();
      });
      mainWindow.on('closed', function() {
        cancelClosing();
        mainWindow = null;
      });
      // mainWindow.on('show', function() {
      //   mainWindow.webContents.openDevTools();
      // });
      mainWindow.once('show', resolve);
      mainWindow.show();
    });
  },
};
