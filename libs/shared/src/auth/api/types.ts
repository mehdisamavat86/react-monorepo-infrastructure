import type { AuthToken } from '@myapp/shared/definition';

export type AuthGrantType = 'authorization_code';

export interface GetTokenRequest {
  grant_type: AuthGrantType;
  code: string;
}

export interface GetTokenResponse extends AuthToken {}
