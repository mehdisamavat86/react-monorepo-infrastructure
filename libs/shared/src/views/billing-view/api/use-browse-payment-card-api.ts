import { useBaseQuery } from '@myapp/shared/http/hooks';
import { useCustomerEndpoint } from '@myapp/shared/workspace';
import { BrowsePaymentCardRequest, BrowsePaymentCardResponse } from './types';

export function useBrowsePaymentCardApi() {
  const endpoint = useCustomerEndpoint('paymentMethod');

  return useBaseQuery<BrowsePaymentCardRequest, BrowsePaymentCardResponse>(
    [useBrowsePaymentCardApi.name],
    {
      url: endpoint,
    }
  );
}
