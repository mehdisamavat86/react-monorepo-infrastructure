import { SubscriptionPlan } from '@myapp/shared/definition';

export interface PlanItemProps {
  className?: string;
  plan?: SubscriptionPlan;
  onScroll?: () => void;
}
