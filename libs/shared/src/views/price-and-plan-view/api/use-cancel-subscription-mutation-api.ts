import { HttpMethod, SubscriptionStatus } from '@myapp/shared/definition';
import { baseQueryClient } from '@myapp/shared/http/base-query-client';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { useCustomerEndpoint } from '@myapp/shared/workspace';
import { CancelSubscriptionRequest, CancelSubscriptionResponse } from './types';
import { useCurrentSubscriptionApi } from './use-current-subscription-api';

export function useCancelSubscriptionMutationApi(id?: string) {
  const endpoint = useCustomerEndpoint('subscription');

  return useBaseMutation<CancelSubscriptionRequest, CancelSubscriptionResponse>(
    {
      url: `${endpoint}/${id}`,
      method: HttpMethod.delete,
    },
    {
      onSuccess: () => {
        baseQueryClient.setQueryData([useCurrentSubscriptionApi.name], {
          ...baseQueryClient.getQueryData([useCurrentSubscriptionApi.name]),
          status: SubscriptionStatus.CANCELED,
        });
      },
    }
  );
}
