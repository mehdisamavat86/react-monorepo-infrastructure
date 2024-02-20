import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { useWorkspace } from '@myapp/shared/workspace';
import { WORKSPACE_ROOT_ENDPOINT } from '@myapp/shared/workspace/constants/endpoints';
import { DisableMemberRequest, DisableMemberResponse } from './types';

export function useDisableMember(id: string) {
  const workspaceId = useWorkspace()?.id;

  return useBaseMutation<DisableMemberRequest, DisableMemberResponse>({
    url: `${WORKSPACE_ROOT_ENDPOINT}/${workspaceId}/members/${id}`,
    method: HttpMethod.patch,
  });
}
