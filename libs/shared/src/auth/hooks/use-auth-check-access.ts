import type { UserRole } from '@myapp/shared/definition';
import { intersection } from 'lodash-es';
import { useAuthContext } from './use-auth-context';

export function useAuthCheckAccess(
  role?: UserRole | UserRole[],
  skipNoRole = false
) {
  const { authenticated, user } = useAuthContext();
  if (skipNoRole && !role?.length) return true;

  const roles = typeof role === 'string' ? [role] : role;
  const hasRole = authenticated && intersection(user?.roles, roles).length > 0;
  return hasRole;
}
