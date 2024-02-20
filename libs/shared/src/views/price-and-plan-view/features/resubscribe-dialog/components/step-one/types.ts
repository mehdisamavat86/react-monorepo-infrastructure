import { SubscriptionPlan } from '@myapp/shared/definition';

export interface StepOneProps {
  className?: string;
  plan: SubscriptionPlan;
  onNext: () => void;
}
