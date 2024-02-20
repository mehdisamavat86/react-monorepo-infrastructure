import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { useWorkspace } from '@myapp/shared/workspace';
import { WORKSPACE_ROOT_ENDPOINT } from '@myapp/shared/workspace/constants/endpoints';
import { ResendTransferRequest, ResendTransferResponse } from './types';

export function useResendTransferMutationApi() {
  const workspace = useWorkspace();
  const userId = workspace?.transfer.user.id;

  return useBaseMutation<ResendTransferRequest, ResendTransferResponse>({
    url: `${WORKSPACE_ROOT_ENDPOINT}/${workspace?.id}/transfers/${userId}`,
    method: HttpMethod.put,
    params: {
      action: 'resend',
    },
  });
}
