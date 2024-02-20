import { useAuthContext } from '../hooks';

type Props = {
  children: React.ReactNode;
};

export function AuthGuard({ children }: Props) {
  const { authenticated, logOut } = useAuthContext();

  if (!authenticated) {
    logOut();
    return null;
  }

  return <>{children}</>;
}
