import type { AuthToken } from '@myapp/shared/definition';
import { useLocalStorage } from '@myapp/shared/hooks';
import { userGetFullName } from '@myapp/shared/utils';
import { createContext } from 'react';
import { AUTH_CACHE_KEY } from '../constants';
import { logoutUser, readUserInfoFromJwt } from '../utils';
import type {
  AuthContextData as ContextData,
  AuthContextProps as ContextProps,
} from './types';

export const AuthContext = createContext<ContextData>({} as ContextData);

export const { Provider } = AuthContext;

export const AuthProvider = ({ children }: ContextProps) => {
  const [token, setPrivateToken] = useLocalStorage<AuthToken | undefined>(
    AUTH_CACHE_KEY,
    undefined
  );
  const userFullName = userGetFullName(token?.user);
  const logOut = (noRedirect = false) => logoutUser(token, noRedirect);
  const setToken = (tokenData: Omit<AuthToken, 'user'>) => {
    setPrivateToken({
      ...tokenData,
      user: readUserInfoFromJwt(tokenData.access_token)!,
    });
  };

  const setUser: ContextData['setUser'] = (user) => {
    if (token) setPrivateToken({ ...token, user });
  };

  return (
    <Provider
      value={{
        token,
        setToken,
        user: token?.user,
        setUser,
        authenticated: !!token,
        loading: !token?.user,
        logOut,
        userFullName,
      }}
    >
      {children}
    </Provider>
  );
};
