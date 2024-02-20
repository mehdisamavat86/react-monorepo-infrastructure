import {
  SubscriptionStatus as Status,
  Subscription,
} from '@myapp/shared/definition';
import { ButtonProps } from '@mui/material';

export function useCalculateCurrentPlanStatusColorAndStatus(
  item?: Subscription
) {
  let label;
  let color: ButtonProps['color'];
  if (item) {
    if (item.current?.status === Status.CANCELED) {
      label = 'Cancelled';
      color = 'error';
    } else if (item.current?.status === Status.ACTIVE) {
      label = item.current?.plan?.interval;
      color = 'success';
    }
    if (item?.current?.plan?.metadata?.is_free) {
      label = 'Free Trial';
      color = 'warning';
    }
  }

  if (!label) color = 'warning';

  return {
    label: label || 'Free Trial',
    color,
  };
}
