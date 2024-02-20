import { SubscriptionPlan } from '@myapp/shared/definition';
import { CurrentPlan, NextPlan } from '../../../../types';

export interface PlanCardHeaderProps {
  className?: string;
  plan?: SubscriptionPlan;
  currentPlan?: CurrentPlan;
  nextPlan?: NextPlan;
}
