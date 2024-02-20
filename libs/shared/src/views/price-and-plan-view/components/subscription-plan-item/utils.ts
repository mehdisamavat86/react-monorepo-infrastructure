import { Subscription, SubscriptionPlan } from '@myapp/shared/definition';
import { fCurrency } from '@myapp/shared/utils';

export function getMonthlyAmount(value: number, isYearly: boolean) {
  return isYearly ? fCurrency(value / 100 / 12, 2) : fCurrency(value / 100, 0);
}

export function getYearlyAmount(value: number, isYearly: boolean) {
  return isYearly
    ? fCurrency(value / 100, 0)
    : fCurrency((value / 100) * 12, 0);
}

export function isPopularPlan(
  plan: SubscriptionPlan,
  subscription?: Subscription
) {
  const currentPlan = subscription?.current;
  return (
    currentPlan?.plan?.metadata?.name === 'Trial' && plan.product.name === 'M'
  );
}
