import { useAuthContext } from '@myapp/shared/auth';
import { useWorkspace } from '../context';

export function useIsOwner() {
  const { user } = useAuthContext();
  const workspace = useWorkspace();
  const isOwner = workspace?.user.id === user?.id;

  return isOwner;
}
