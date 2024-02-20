import { HTTP_REFETCH_INTERVAL } from '@myapp/shared/http';
import { useBaseQuery } from '@myapp/shared/http/hooks';
import { useCustomerEndpoint } from '@myapp/shared/workspace';
import {
  CurrentSubscriptionRequest,
  CurrentSubscriptionResponse,
} from './types';

export function useCurrentSubscriptionApi() {
  const endpoint = useCustomerEndpoint('subscription');

  return useBaseQuery<CurrentSubscriptionRequest, CurrentSubscriptionResponse>(
    [useCurrentSubscriptionApi.name],
    {
      url: endpoint,
    },
    {
      refetchInterval: HTTP_REFETCH_INTERVAL,
    }
  );
}
