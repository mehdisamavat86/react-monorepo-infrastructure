import {
  AUTH_CLIENT_ID,
  AUTH_REDIRECT_URL,
  AUTH_TOKEN_ENDPOINT,
  logoutUser,
  readTokenFromStorage,
  saveTokenToStorage,
} from '@myapp/shared/auth';
import { AUTH_URL } from '@myapp/shared/auth/constants';
import type { AuthToken } from '@myapp/shared/definition';
import { HttpMethod } from '@myapp/shared/definition';
import { toBase64BasicHeader, toUrlQueryString } from '@myapp/shared/utils';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({ baseURL: AUTH_URL });

const authFetcher = async (config: AxiosRequestConfig) => {
  const res = await instance(config);
  return res.data;
};

export async function getRefereshToken() {
  const token = readTokenFromStorage();

  if (token) {
    try {
      const data: AuthToken = await authFetcher({
        url: AUTH_TOKEN_ENDPOINT,
        method: HttpMethod.post,
        data: toUrlQueryString({
          grant_type: 'refresh_token',
          refresh_token: token.refresh_token,
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: toBase64BasicHeader(AUTH_CLIENT_ID),
          redirect_uri: AUTH_REDIRECT_URL,
        },
      });

      if (data) {
        saveTokenToStorage(data);
        return data;
      }
    } catch {
      // do nothing
    }
  }

  logoutUser(token);
  return null;
}

export default authFetcher;
