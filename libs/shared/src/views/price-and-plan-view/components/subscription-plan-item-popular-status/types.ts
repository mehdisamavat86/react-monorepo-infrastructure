import { SubscriptionPlan } from '@myapp/shared/definition';
import { PlanConfig } from '../../types';

export interface SubscriptionPlanItemPopularStatusProps {
  className?: string;
  item: SubscriptionPlan;
  config: PlanConfig;
}
