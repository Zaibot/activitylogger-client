import creator from './creator';

export default creator<{ folders: { id: string, creationTime: number; path: string; }[] }>(`MONITORFOLDER_LOAD`);
