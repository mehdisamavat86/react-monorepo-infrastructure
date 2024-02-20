import type {
  CancelSubscriptionReason,
  Subscription,
} from '@myapp/shared/definition';

export interface CancelSubscriptionProps {
  className?: string;
  item?: Subscription;
}

export type ReasonData = {
  reason?: CancelSubscriptionReason;
  description: string;
};
