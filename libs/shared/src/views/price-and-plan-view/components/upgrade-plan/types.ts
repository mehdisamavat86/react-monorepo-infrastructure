import type { SubscriptionPlan } from '@myapp/shared/definition';
import type { PlanConfig } from '../../types';

export interface UpgradePlanProps {
  className?: string;
  item: SubscriptionPlan;
  config: PlanConfig;
}
