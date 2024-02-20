import { SubscriptionPlan } from '@myapp/shared/definition';
import { CompareTitle } from '../../types';

export interface ComparisonItemProps {
  className?: string;
  item?: string;
  plans?: SubscriptionPlan[];
  heading?: boolean;
}
