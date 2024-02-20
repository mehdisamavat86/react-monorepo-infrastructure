import { HttpMethod } from '@myapp/shared/definition';
import { baseQueryClient } from '@myapp/shared/http/base-query-client';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { useCustomerEndpoint } from '@myapp/shared/workspace';
import { DeletePaymentCardRequest, DeletePaymentCardResponse } from './types';
import { useBrowsePaymentCardApi } from './use-browse-payment-card-api';

export function useDeletePaymentCardMutationApi(id: string) {
  const endpoint = useCustomerEndpoint('paymentMethod');

  return useBaseMutation<DeletePaymentCardRequest, DeletePaymentCardResponse>(
    {
      url: `${endpoint}/${id}`,
      method: HttpMethod.delete,
    },
    {
      onSuccess: (data) => {
        baseQueryClient.setQueryData([useBrowsePaymentCardApi.name], data);
      },
    }
  );
}
