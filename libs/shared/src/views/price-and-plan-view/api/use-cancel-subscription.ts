import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http';
import { useCustomerEndpoint } from '@myapp/shared/workspace';

export function useCancelSubscription(planId: string) {
  const endpoint = useCustomerEndpoint('subscriptionWithId').replace(
    ':id',
    planId
  );

  return useBaseMutation({
    url: endpoint,
    method: HttpMethod.delete,
    params: { action: 'schedule' },
  });
}
