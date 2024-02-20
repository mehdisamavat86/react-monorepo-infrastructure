export const APP_ORG = import.meta.env.VITE_APP_ORG || 'myapp';
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'myapp';
export const APP_STAGE = import.meta.env.VITE_APP_STAGE || 'dev';
export const IS_DEV_SERVER =
  APP_STAGE === 'dev' ||
  import.meta.env.DEV ||
  window.location.origin.includes('dev.');
