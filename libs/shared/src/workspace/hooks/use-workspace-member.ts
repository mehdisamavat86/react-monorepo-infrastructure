import { useAuthContext } from '@myapp/shared/auth';
import { Member, MemberStatus, MemberType } from '@myapp/shared/definition';
import { useWorkspace } from '../context';

export function useWorkspaceMember(): Member {
  const workspace = useWorkspace();
  const { user } = useAuthContext();

  return (
    workspace?.members.find((x) => x.user.id === user?.id) ||
    ({
      created: workspace?.created,
      status: MemberStatus.Active,
      type: MemberType.Owner,
      user: workspace?.user,
    } as Member)
  );
}
