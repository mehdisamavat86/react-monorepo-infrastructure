import type { AuthToken, AuthUser, Nullable } from '@myapp/shared/definition';
import type { PropsWithChildren } from 'react';

export interface AuthContextData {
  token?: Nullable<AuthToken>;
  setToken: (value: AuthToken) => void;
  user?: Nullable<AuthUser>;
  setUser: (user: AuthUser) => void;
  userFullName?: string;
  authenticated: boolean;
  loading: boolean;
  logOut: (noRedirect?: boolean) => void;
}

export interface AuthContextProps extends PropsWithChildren {}
