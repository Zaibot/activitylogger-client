import squirrelStartup from 'electron-squirrel-startup';

if (squirrelStartup) {
  // during install, nothing
} else {
  require('./startup').default();
}
