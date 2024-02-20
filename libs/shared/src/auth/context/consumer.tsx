import { SplashScreen } from '@myapp/shared/components/loading-screen';
import { PropsWithChildren } from 'react';
import { AUTH_LOGIN_URL } from '../constants';
import { AuthContext } from './context';

export function AuthConsumer({ children }: PropsWithChildren) {
  const redirectToLoginPage = () => {
    setTimeout(() => {
      window.location.href = AUTH_LOGIN_URL;
    }, 100);
  };

  return (
    <AuthContext.Consumer>
      {(auth) =>
        auth.loading ? (
          <>
            {!auth.token && redirectToLoginPage()}
            <SplashScreen />
          </>
        ) : (
          children
        )
      }
    </AuthContext.Consumer>
  );
}
