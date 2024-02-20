import { SubscriptionStatus } from '@myapp/shared/definition';
import { useBaseQuery } from '@myapp/shared/http/hooks';
import { PLAN_ROOT_ENDPOINT } from '@myapp/shared/workspace/constants/endpoints';
import {
  BrowseSubscriptionPlanRequest,
  BrowseSubscriptionPlanResponse,
} from './types';

export function useBrowseSubscriptionPlanApi() {
  return useBaseQuery<
    BrowseSubscriptionPlanRequest,
    BrowseSubscriptionPlanResponse
  >([useBrowseSubscriptionPlanApi.name], {
    url: PLAN_ROOT_ENDPOINT,
    params: {
      status: SubscriptionStatus.ACTIVE,
    },
  });
}
