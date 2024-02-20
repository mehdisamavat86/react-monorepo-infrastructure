import {
  dateCompare,
  fDateAdd,
  intervalToDuration,
} from '@myapp/shared/utils';
import { useCurrentSubscriptionApi } from '@myapp/shared/views/price-and-plan-view/api/use-current-subscription-api';
import { Nullable } from 'vitest';
import { PLAN_EXPIRY_WARNING_DAYS } from '../constants';
import { SubscriptionExpirationStatus as Status } from '../types';

export function useSubscriptionExpiryInfo() {
  const { data, refetch, isLoading } = useCurrentSubscriptionApi();
  let status = Status.active;
  let warningText: Nullable<string> = null;
  const compare = dateCompare(
    Date.now(),
    data?.current?.currentPeriodEnd
      ? Date.parse(data?.current?.currentPeriodEnd)
      : fDateAdd(Date.now(), { years: 1 }),
    'desc'
  );
  const endDate = data?.current?.currentPeriodEnd
    ? new Date(data?.current?.currentPeriodEnd)
    : new Date();
  const remainingDuration = intervalToDuration(endDate);

  if (compare < 0) status = Status.expired;
  else if ((remainingDuration?.days ?? 0) <= PLAN_EXPIRY_WARNING_DAYS)
    status = Status.expiring;

  if (status === Status.expiring)
    warningText =
      remainingDuration?.days === 0
        ? 'Your subscription expires today.'
        : `Your subscription expires in ${remainingDuration?.days} days.`;

  return {
    status,
    remainingDuration,
    isExpiring: status === Status.expiring,
    warningText,
    data,
    refetch,
    isLoading,
  };
}
