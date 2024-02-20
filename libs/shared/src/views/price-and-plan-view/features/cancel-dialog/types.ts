import { SubscriptionPlan } from '@myapp/shared/definition';

export interface CancelDialogProps {
  className?: string;
  plan: SubscriptionPlan;
  nextPlanId: string;
}
