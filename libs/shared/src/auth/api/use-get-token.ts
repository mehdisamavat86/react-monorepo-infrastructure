import { ErrorResponse, HttpMethod } from '@myapp/shared/definition';
import { authFetcher } from '@myapp/shared/http/fetcher';
import { toBase64BasicHeader } from '@myapp/shared/utils';
import { useMutation } from '@tanstack/react-query';
import {
  AUTH_CLIENT_ID,
  AUTH_REDIRECT_URL,
  AUTH_TOKEN_ENDPOINT,
} from '../constants';
import { GetTokenRequest, GetTokenResponse } from './types';

export function useGetToken() {
  return useMutation<GetTokenResponse, ErrorResponse, GetTokenRequest>((data) =>
    authFetcher({
      method: HttpMethod.post,
      url: AUTH_TOKEN_ENDPOINT,
      data: {
        ...data,
        redirect_uri: AUTH_REDIRECT_URL,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: toBase64BasicHeader(AUTH_CLIENT_ID),
      },
    })
  );
}
