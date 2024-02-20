import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { useWorkspace } from '@myapp/shared/workspace';
import { WORKSPACE_ROOT_ENDPOINT } from '@myapp/shared/workspace/constants/endpoints';
import { TransferRequest, TransferResponse } from './types';

export function useTransferMutationApi() {
  const workspaceId = useWorkspace()?.id;

  return useBaseMutation<TransferRequest, TransferResponse>({
    url: `${WORKSPACE_ROOT_ENDPOINT}/${workspaceId}/transfers`,
    method: HttpMethod.post,
  });
}
