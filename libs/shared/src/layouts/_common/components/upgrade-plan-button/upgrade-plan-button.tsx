import { SHARED_ROUTES } from '@myapp/shared/constants';
import { SubscriptionExpirationStatus } from '@myapp/shared/features/global-notification-bar/components/subscription-bar';
import { useSubscriptionExpiryInfo } from '@myapp/shared/features/global-notification-bar/components/subscription-bar/hooks/use-subscription-expiry-info';
import { useCurrentSubscriptionApi } from '@myapp/shared/views/price-and-plan-view/api/use-current-subscription-api';
import { Typography } from '@mui/material';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './styles';
import * as SX from './sx';
import type { UpgradePlanButtonProps as Props } from './types';

export const UpgradePlanButton = memo(({ className }: Props) => {
  const { data } = useCurrentSubscriptionApi();
  const { status } = useSubscriptionExpiryInfo();
  const { pathname } = useLocation();

  const isPricingPage = pathname === SHARED_ROUTES.priceAndPlan;

  const expire =
    status === SubscriptionExpirationStatus.expiring ||
    status === SubscriptionExpirationStatus.expired;

  const outOfCredit = data?.credit?.used === data?.credit?.charged;

  if (data?.current?.plan?.trial || isPricingPage) return null;
  return (
    <Styled.UpdradeLink to={SHARED_ROUTES.priceAndPlan}>
      <Typography
        variant="caption"
        color={expire || outOfCredit ? 'error.main' : 'common.black'}
        sx={SX.upgradePlan}
      >
        🚀 Upgrade
      </Typography>
    </Styled.UpdradeLink>
  );
});

UpgradePlanButton.displayName = 'UpgradePlanButton';
