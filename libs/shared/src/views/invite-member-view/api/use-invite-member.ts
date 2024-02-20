import { useBaseMutation } from '@myapp/shared/http/hooks';
import { useWorkspace } from '@myapp/shared/workspace';
import { WORKSPACE_ROOT_ENDPOINT } from '@myapp/shared/workspace/constants/endpoints';
import { AddMemberRequest, AddMemberResponse } from './types';

export function useInviteMember() {
  const workspaceId = useWorkspace()?.id;

  return useBaseMutation<AddMemberRequest, AddMemberResponse>({
    url: `${WORKSPACE_ROOT_ENDPOINT}/${workspaceId}/members`,
  });
}
