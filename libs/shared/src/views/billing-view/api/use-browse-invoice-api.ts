import { HTTP_REFETCH_INTERVAL } from '@myapp/shared/http';
import { useBaseQuery } from '@myapp/shared/http/hooks';
import { useCustomerEndpoint } from '@myapp/shared/workspace';
import { BrowseInvoiceRequest, BrowseInvoiceResponse } from './types';

export function useBrowseInvoiceApi(params: BrowseInvoiceRequest) {
  const endpoint = useCustomerEndpoint('invoice');

  return useBaseQuery<BrowseInvoiceRequest, BrowseInvoiceResponse>(
    [useBrowseInvoiceApi.name, params],
    {
      url: endpoint,
      params,
    },
    {
      refetchInterval: HTTP_REFETCH_INTERVAL,
    }
  );
}
