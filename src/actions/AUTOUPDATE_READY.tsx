import creator from './creator';

export default creator<{ time: number; appName: string; releaseName: string; releaseNotes: string }>(`AUTOUPDATE_READY`);
