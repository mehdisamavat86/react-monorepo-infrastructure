import {
  AuthToken,
  AuthTokenPayload,
  AuthUser,
} from '@myapp/shared/definition/auth';
import { decode } from 'jsonwebtoken';
import { merge } from 'lodash-es';
import type { Nil, Nullable } from '../definition';
import {
  localStorageGet,
  localStorageRemove,
  localStorageSet,
} from '../utils/storage';
import { AUTH_CACHE_KEY, AUTH_LOGIN_URL, AUTH_URL } from './constants';

export function parseJwt(token: string): AuthTokenPayload {
  return decode(token) as AuthTokenPayload;
}

export function readUserInfoFromJwt(token: string): Nullable<AuthUser> {
  const data = decode(token);

  if (data && typeof data === 'object') {
    const payload = data as AuthTokenPayload;

    return {
      id: payload.sub,
      firstName: payload.given_name,
      lastName: payload.family_name,
      email: payload.email,
      username: payload.preferred_username || payload.email,
      attributes: {
        alternateEmail: payload.alternateEmail,
        site: payload.site,
        industry: payload.industry,
        company: payload.company,
        avatar: payload.avatar,
        title: payload.title,
        phone: payload.phone,
      },
      roles: payload.resource_access?.web?.roles || [],
    };
  }

  return null;
}

export function readTokenFromStorage() {
  return localStorageGet<AuthToken>(AUTH_CACHE_KEY);
}

export function saveTokenToStorage(token: AuthToken) {
  return localStorageSet(AUTH_CACHE_KEY, token);
}

export function logoutUser(
  token?: Nil<AuthToken>,
  noRedirect: boolean = false
) {
  localStorageRemove(AUTH_CACHE_KEY);
  if (!noRedirect) window.location.href = getLogoutUrl(token);
}

export function getLogoutUrl(token?: Nil<AuthToken>) {
  if (!token) return '#';

  const redirect_uri = encodeURIComponent(AUTH_LOGIN_URL);
  return token?.id_token
    ? `${AUTH_URL}/logout?id_token_hint=${token?.id_token}&post_logout_redirect_uri=${redirect_uri}`
    : AUTH_LOGIN_URL;
}

export const mergeUserData = (
  user?: Nullable<Partial<AuthUser>>,
  ...partials: Nullable<Partial<AuthUser>>[]
) => {
  return partials
    .filter(Boolean)
    .reduce((r, c) => merge(r, c), user || {}) as AuthUser;
};
