import creator from './creator';

export default creator<{ logUrl: string; dashboardUrl: string; aggregatorUrl: string; electronUrl: string; }>(`CONNECTION_ONLINE`);
