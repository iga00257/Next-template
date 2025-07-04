export const ENVIRONMENT = {
  PROD: 'production',
  DEV: 'development',
};

export const configs = {
  [ENVIRONMENT.DEV]: {
    domainUrl: 'https://dev.example.com',
    apiUrl: 'https://pokeapi.co/api/v2',
  },

  [ENVIRONMENT.PROD]: {
    domainUrl: 'https://example.com',
    apiUrl: 'https://example.com/api',
  },
};

export const envConfigs = configs[process.env.NEXT_PUBLIC_DEPLOY_ENV] || configs[ENVIRONMENT.DEV];
