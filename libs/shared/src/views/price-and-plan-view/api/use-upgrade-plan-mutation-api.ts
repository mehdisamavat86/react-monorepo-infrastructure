import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { useCustomerEndpoint } from '@myapp/shared/workspace';
import {
  SubscriptionActiveAction,
  UpgradeSubscriptionPlanRequest,
  UpgradeSubscriptionPlanResponse,
} from './types';

export function useUpgradePlanMutationApi(action: SubscriptionActiveAction) {
  const endpoint = useCustomerEndpoint('subscription');

  return useBaseMutation<
    UpgradeSubscriptionPlanRequest,
    UpgradeSubscriptionPlanResponse
  >({
    url: endpoint,
    method: HttpMethod.post,
    params: { action },
  });
}
