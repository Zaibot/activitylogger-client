import creator from './creator';

export default creator<{ time: number; error: Error; }>(`AUTOUPDATE_ERROR`);
