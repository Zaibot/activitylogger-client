import creator from './creator';

export default creator<{ folders: Array<{ id: string, creationTime: number; path: string; }> }>(`MONITORFOLDER_LOAD`);
