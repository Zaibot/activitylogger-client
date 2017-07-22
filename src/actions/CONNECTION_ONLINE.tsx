import creator from './creator';

export default creator<{ logUrl: string; dashboardUrl: string; aggregatorUrl: string; }>(`CONNECTION_ONLINE`);
