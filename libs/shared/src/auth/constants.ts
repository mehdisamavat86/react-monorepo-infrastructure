import { APP_STAGE } from '../constants/app';

export const AUTH_CACHE_KEY = 'auth-token';
export const APP_TENANT_ID =
  import.meta.env.VITE_APP_TENANT_ID || '22c76d12-4331-46ed-9fb0-0af3b9d798fa';
export const AUTH_REALM = import.meta.env.VITE_AUTH_REALM || 'myapp';
export const PATH_AFTER_LOGIN =
  import.meta.env.VITE_PATH_AFTER_LOGIN || '/dashboard';
export const AUTH_URL =
  import.meta.env.VITE_AUTH_URL ||
  `https://sso-${APP_STAGE}.ai-pigeons.com/realms/${AUTH_REALM}/protocol/openid-connect`;
export const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID || 'web';
export const AUTH_CLIENT_SECRET = import.meta.env.VITE_AUTH_CLIENT_SECRET || '';
export const AUTH_REDIRECT_URL =
  import.meta.env.VITE_AUTH_REDIRECT_URL ||
  `${globalThis.location?.origin || ''}/auth`;
export const AUTH_LOGIN_URL = `${AUTH_URL}/auth?response_type=code&scope=openid&client_id=${AUTH_CLIENT_ID}&redirect_uri=${AUTH_REDIRECT_URL}`;
export const AUTH_TOKEN_ENDPOINT =
  import.meta.env.VITE_AUTH_TOKEN_ENDPOINT || '/token';
