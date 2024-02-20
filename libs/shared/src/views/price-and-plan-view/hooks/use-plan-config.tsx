import { Icon } from '@myapp/shared/components';
import {
  SubscriptionStatus as Status,
  Subscription,
  SubscriptionPlan,
} from '@myapp/shared/definition';
import { lighten, useTheme } from '@mui/material/styles';
import { PlanConfig } from '../types';
import { usePlanList } from './use-plan-list';
import { ActionType, Dialog } from '../features/dialog';
import { ResubscribeDialog } from '../features/resubscribe-dialog';
import { CancelDialog } from '../features/cancel-dialog';

export function usePlanConfig(
  item: SubscriptionPlan,
  subscription?: Subscription
): PlanConfig {
  const theme = useTheme();
  const items = usePlanList();

  const currentItem = subscription?.current;
  const nextItem = subscription?.next;

  const isUpcoming = subscription?.next?.plan?.id === item?.id;
  const isCurrent = subscription?.current?.plan?.id === item?.id;

  const isCanceled = currentItem?.status === Status.CANCELED;
  const upgrade =
    currentItem &&
    items
      ?.filter((x) => x.amount > (currentItem?.plan?.amount || 0))
      .find((x) => x.id === item.id);

  // current plan
  if (!isCanceled && isCurrent)
    return {
      icon: undefined,
      title: 'Current Plan',
      dialogContent: <ResubscribeDialog plan={item} />,
      buttonTitle: (
        <>
          Resubscribe <Icon name="open-in-new-outline" sxx={{ mx: '10px' }} />
        </>
      ),
      variant: 'outlined',
      color: 'success',
      textColor: theme.palette.success.main,
      titleColor: lighten(theme.palette.success.main, 0.8),
      current: {
        currentEnd: currentItem?.currentPeriodEnd,
      },
    };
  if (!isCanceled && isCurrent && item.metadata.is_free)
    return {
      icon: undefined,
      title: 'Current Plan',
      buttonTitle: 'Subscribed',
      variant: 'contained',
      color: 'success',
      textColor: theme.palette.success.main,
      titleColor: lighten(theme.palette.success.main, 0.8),
      disabled: true,
    };
  // current plan and free
  if (!isCanceled && !isUpcoming && !isCurrent && item.metadata.is_free)
    return {
      dialogContent: <Dialog actionType={ActionType.DOWNGRADE} plan={item} />,
      icon: undefined,
      title: 'Current Plan',
      buttonTitle: 'Downgrade to Free',
      variant: 'contained',
      color: 'success',
      textColor: theme.palette.success.main,
      titleColor: lighten(theme.palette.success.main, 0.8),
    };
  // upgrade
  if ((!isUpcoming && upgrade) || isCanceled) {
    return {
      icon: <Icon name="upgrade" color="primary" />,
      dialogContent: <Dialog actionType={ActionType.UPGRADE} plan={item} />,
      title: 'Upgrade your Plan',
      buttonTitle: 'Upgrade',
      color: 'primary',
      variant: 'contained',
      textColor: theme.palette.primary.main,
      titleColor: lighten(theme.palette.primary.main, 0.8),
    };
  }
  // downgrade
  if (currentItem && !isCanceled && !upgrade && !isUpcoming) {
    return {
      icon: <Icon name="downgrade" color="primary" />,
      title: 'Downgrade your Plan',
      dialogContent: <Dialog actionType={ActionType.DOWNGRADE} plan={item} />,
      buttonTitle: 'Downgrade',
      color: 'inherit',
      variant: 'outlined',
      textColor: theme.palette.primary.main,
      titleColor: lighten(theme.palette.primary.main, 0.8),
    };
  }
  if (isUpcoming && !isCanceled && !upgrade) {
    return {
      icon: <Icon name="downgrade" color="primary" />,
      dialogContent: (
        <CancelDialog plan={item} nextPlanId={subscription?.next?.id || ''} />
      ),
      title: 'Downgrade your Plan',
      buttonTitle: 'Cancel Downgrade',
      color: 'inherit',
      variant: 'soft',
      textColor: theme.palette.primary.main,
      titleColor: lighten(theme.palette.primary.main, 0.8),
      next: {
        nextStart: nextItem?.startDate,
      },
    };
  }
  if (isUpcoming && !isCanceled && upgrade) {
    return {
      icon: <Icon name="downgrade" color="primary" />,
      title: 'Upgrade your Plan',
      dialogContent: (
        <CancelDialog plan={item} nextPlanId={subscription?.next?.id || ''} />
      ),
      buttonTitle: 'Cancel Upgrade',
      color: 'inherit',
      variant: 'soft',
      textColor: theme.palette.primary.main,
      titleColor: lighten(theme.palette.primary.main, 0.8),
      next: {
        nextStart: nextItem?.startDate, // TODO remove match with API
      },
    };
  }

  return {
    icon: <Icon name="upgrade" color="primary" />,
    title: 'Upgrade your Plan',
    buttonTitle: (
      <>
        <Icon name="flash" /> Get Started
      </>
    ),
    color: 'primary',
    variant: 'contained',
    textColor: theme.palette.primary.main,
    titleColor: lighten(theme.palette.primary.main, 0.8),
  };
}
