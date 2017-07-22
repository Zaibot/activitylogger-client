import creator from './creator';

export default creator<{ time: number; durationIdle: number; }>(`TRIGGERED_IDLE`);
