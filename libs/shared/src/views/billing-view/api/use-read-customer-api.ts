import { useBaseQuery } from '@myapp/shared/http/hooks';
import { CUSTOMER_ROOT_ENDPOINT } from '@myapp/shared/workspace/constants/endpoints';
import { ReadCustomerRequest, ReadCustomerResponse } from './types';

export function useReadCustomerApi(userId?: string) {
  return useBaseQuery<ReadCustomerRequest, ReadCustomerResponse>(
    [useReadCustomerApi.name],
    {
      url: `${CUSTOMER_ROOT_ENDPOINT}/${userId}`,
    }
  );
}
