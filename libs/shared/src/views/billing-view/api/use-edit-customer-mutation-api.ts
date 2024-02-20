import { HttpMethod } from '@myapp/shared/definition';
import { baseQueryClient } from '@myapp/shared/http/base-query-client';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { CUSTOMER_ROOT_ENDPOINT } from '@myapp/shared/workspace/constants/endpoints';
import { EditCustomerRequest, EditCustomerResponse } from './types';
import { useReadCustomerApi } from './use-read-customer-api';

export function useEditCustomerMutationApi(userId: string) {
  return useBaseMutation<EditCustomerRequest, EditCustomerResponse>(
    {
      url: `${CUSTOMER_ROOT_ENDPOINT}/${userId}`,
      method: HttpMethod.put,
    },
    {
      onSuccess: (data) => {
        baseQueryClient.setQueryData([useReadCustomerApi.name], data);
      },
    }
  );
}
