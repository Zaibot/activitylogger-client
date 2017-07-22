import creator from './creator';

export default creator<{ id: string; creationTime: number; type: string; data: any }>(`BUFFER_QUEUE`);
