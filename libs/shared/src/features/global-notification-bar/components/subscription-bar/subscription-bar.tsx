import { SHARED_ROUTES } from '@myapp/shared/constants';
import { classnames } from '@myapp/shared/utils';
import { useCreditUpdateSocketListener } from '@myapp/shared/views/billing-view/socket/use-credit-update-socket-listener';
import { useCurrentSubscriptionApi } from '@myapp/shared/views/price-and-plan-view/api/use-current-subscription-api';
import { Typography } from '@mui/material';
import { memo } from 'react';
import { PLAN_EXPIRY_HIDDEN } from './constants';
import { useSubscriptionExpiryInfo } from './hooks/use-subscription-expiry-info';
import * as Styled from './styles';
import type { SubscriptionBarProps as Props } from './types';

export const SubscriptionBar = memo(({ className }: Props) => {
  const { isExpiring, warningText, isLoading } = useSubscriptionExpiryInfo();
  const { data } = useCurrentSubscriptionApi();
  const isOutOfCredit = data?.credit?.used === data?.credit?.charged;
  useCreditUpdateSocketListener();

  if (((!isExpiring || isLoading) && !isOutOfCredit) || PLAN_EXPIRY_HIDDEN)
    return null;

  return (
    <Styled.Wrapper
      className={classnames('SubscriptionBar', className)}
      severity="error"
      icon={false}
    >
      {warningText}
      {isOutOfCredit && <Typography>Out of credit? Time to upgrade</Typography>}
      <Styled.Subscribe to={SHARED_ROUTES.priceAndPlan}>
        🚀<b>Subscribe now</b>
      </Styled.Subscribe>
    </Styled.Wrapper>
  );
});

SubscriptionBar.displayName = 'SubscriptionBar';
