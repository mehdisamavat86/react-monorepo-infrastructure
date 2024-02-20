import type { UserRole } from '@myapp/shared/definition';
import { useNotify } from '@myapp/shared/hooks';
import { Alert } from '@mui/material';
import { useAuthCheckAccess } from '../hooks/use-auth-check-access';

export type { UserRole as Roles } from '@myapp/shared/definition';

type Props = {
  children: React.ReactNode;
  roles: UserRole | UserRole[];
  notify?: string | true;
  message?: string | true;
};

const MSG = 'Yo dont have access to this section';

export function AuthRoleGuard({ children, roles, notify, message }: Props) {
  const auth = useAuthCheckAccess(roles);
  const notif = useNotify();

  if (!auth) {
    if (!message && notify) notif.error(notify === true ? MSG : notify);
    if (message)
      return (
        <Alert severity="error" title="Access Error" sx={{ margin: '2em' }}>
          {message === true ? MSG : message}
        </Alert>
      );

    return null;
  }

  return <>{children}</>;
}
