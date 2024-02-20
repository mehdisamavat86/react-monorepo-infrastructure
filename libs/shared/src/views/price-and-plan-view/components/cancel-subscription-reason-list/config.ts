import { CancelSubscriptionReason } from '@myapp/shared/definition';

export const CANCEL_SUBSCRIPTION_REASON_LABEL: Record<
  CancelSubscriptionReason,
  string
> = {
  TOO_COMPLEX: `It’s too complicated.`,
  TOO_EXPENSIVE: `It’s expensive.`,
  CUSTOMER_SERVICE: 'I finished the work, I needed to do.',
  LOW_QUALITY: 'The data quality is too low.',
  MISSING_FEATURES: 'Some features are missed.',
  OTHER: 'Other reasons',
};
