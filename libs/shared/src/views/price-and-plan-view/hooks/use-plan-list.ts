import { SubscriptionInterval as Interval } from '@myapp/shared/definition';
import { baseQueryClientGetData } from '@myapp/shared/http/base-query-client';
import { BrowseSubscriptionPlanResponse } from '../api/types';
import { useBrowseSubscriptionPlanApi } from '../api/use-browse-subscription-plan-api';
import usePriceAndPlanStore from '../store';

export function usePlanList() {
  const response = baseQueryClientGetData<BrowseSubscriptionPlanResponse>([
    useBrowseSubscriptionPlanApi.name,
  ]);
  const data = response || [];
  const yearly = usePriceAndPlanStore.useYearly();
  const items = data
    .filter(
      (x) =>
        x.trial || x.interval === (yearly ? Interval.yearly : Interval.monthly)
    )
    .sort((a, b) => a.amount - b.amount);
  return items;
}
