import { SubscriptionPlan } from '@myapp/shared/definition';
import { ActionType } from '../../types';

export interface StepOneProps {
  className?: string;
  plan: SubscriptionPlan;
  onNext: () => void;
  actionType: ActionType;
}
