import { useRouter } from '@myapp/shared/router';
import { useCallback, useEffect } from 'react';
import { PATH_AFTER_LOGIN } from '../constants';
import { useAuthContext } from '../hooks';

type Props = {
  children: React.ReactNode;
};

export function GuestGuard({ children }: Props) {
  const router = useRouter();

  const { authenticated } = useAuthContext();

  const check = useCallback(() => {
    if (authenticated) {
      router.replace(PATH_AFTER_LOGIN);
    }
  }, [authenticated, router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
