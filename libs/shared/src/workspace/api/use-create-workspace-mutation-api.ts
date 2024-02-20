import { CreateWorkspaceFormData as Request } from '@myapp/shared/components';
import { Workspace } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';

export function useCreateWorkspaceMutationApi() {
  // TODO change to url used before url: `/${API_BASE_PATH}/um/workspaces`,
  return useBaseMutation<Request, Workspace>({
    url: `/customer-management/um/workspaces`,
  });
}
