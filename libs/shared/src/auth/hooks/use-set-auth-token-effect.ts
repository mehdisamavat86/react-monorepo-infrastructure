import type { AuthToken, Nil } from '@myapp/shared/definition';
import { useEffect } from 'react';
import { useAuthContext } from './use-auth-context';

export const useSetAuthTokenEffect = (
  token: Nil<AuthToken>,
  callback?: VoidFunction
) => {
  const { setToken } = useAuthContext();

  useEffect(() => {
    if (token) {
      setToken(token);
      callback?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
};
