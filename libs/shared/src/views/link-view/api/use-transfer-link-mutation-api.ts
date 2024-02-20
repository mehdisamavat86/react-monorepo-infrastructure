import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { TRANSFER_LINK_ROOT_ENDPOINT } from '@myapp/shared/workspace/constants/endpoints';
import { TransferLinkRequest, TransferLinkResponse } from './types';

export function useTransferLinkMutationApi(id: string) {
  return useBaseMutation<TransferLinkRequest, TransferLinkResponse>({
    url: `${TRANSFER_LINK_ROOT_ENDPOINT}/${id}`,
    method: HttpMethod.put,
    params: {
      action: 'accept',
    },
  });
}
