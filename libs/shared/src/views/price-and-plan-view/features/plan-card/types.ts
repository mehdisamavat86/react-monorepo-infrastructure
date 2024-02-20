import { SubscriptionPlan } from '@myapp/shared/definition';

export interface PlanCardProps {
  className?: string;
  plan: SubscriptionPlan;
  onScroll?: () => void;
}
