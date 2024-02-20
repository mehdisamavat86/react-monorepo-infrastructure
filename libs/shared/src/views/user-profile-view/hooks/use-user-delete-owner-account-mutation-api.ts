import { API_BASE_PATH } from '@myapp/shared/constants';
import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { useWorkspace } from '@myapp/shared/workspace';

export function useUserDeleteOwnerAccountMutationApi() {
  const workspace = useWorkspace()?.id;

  return useBaseMutation<
    { password: string; description?: string },
    { valid: boolean }
  >({
    url: `/${API_BASE_PATH}/customer-management/um/workspaces/${workspace}`,
    method: HttpMethod.delete,
  });
}
