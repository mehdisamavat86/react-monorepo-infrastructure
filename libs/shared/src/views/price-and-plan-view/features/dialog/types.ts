import { SubscriptionPlan } from '@myapp/shared/definition';

export interface DialogProps {
  className?: string;
  plan: SubscriptionPlan;
  actionType: ActionType;
}

export enum ActionType {
  UPGRADE = 'upgrade',
  DOWNGRADE = 'downgrade',
}
