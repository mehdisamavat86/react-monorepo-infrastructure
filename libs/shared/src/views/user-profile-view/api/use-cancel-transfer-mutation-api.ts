import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { useWorkspace } from '@myapp/shared/workspace';
import { WORKSPACE_ROOT_ENDPOINT } from '@myapp/shared/workspace/constants/endpoints';
import { CancelTransferRequest, CancelTransferResponse } from './types';

export function useCancelTransferMutationApi() {
  const workspace = useWorkspace();
  const userId = workspace?.transfer.user.id;

  return useBaseMutation<CancelTransferRequest, CancelTransferResponse>({
    url: `${WORKSPACE_ROOT_ENDPOINT}/${workspace?.id}/transfers/${userId}`,
    method: HttpMethod.delete,
  });
}
