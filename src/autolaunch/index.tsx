import AutoLaunch from 'auto-launch';

var autoLauncher = new AutoLaunch({
  appName: `Zaibot's Activity Logger`,
  name: `Zaibot's Activity Logger`,
  isHidden: true,
});

export default async () => {
  if (process.env.NODE_ENV === 'production') {
    try {
      const isEnabled = await autoLauncher.isEnabled();
      if (isEnabled) {
        console.log(`autolaunch already enabled`);
        return;
      }
      console.log(`autolaunch enabling`)
      await autoLauncher.enable();
      console.log(`autolaunch enabled`)
    }
    catch (err) {
      console.error(err);
    }
  }
};
