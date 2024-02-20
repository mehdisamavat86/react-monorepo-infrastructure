import { Subscription } from '@myapp/shared/definition';
import { CreditType } from '../account-popover-credits/types';

export interface AccountPopoverCreditItemProps {
  className?: string;
  type: CreditType;
  subscription: Subscription;
}
