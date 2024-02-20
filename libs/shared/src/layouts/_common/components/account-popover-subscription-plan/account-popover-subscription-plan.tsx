import { SHARED_ROUTES } from '@myapp/shared/constants';
import { SubscriptionStatus } from '@myapp/shared/definition';
import { SubscriptionExpirationStatus } from '@myapp/shared/features/global-notification-bar/components/subscription-bar';
import { useSubscriptionExpiryInfo } from '@myapp/shared/features/global-notification-bar/components/subscription-bar/hooks/use-subscription-expiry-info';
import { useRedirect } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { useCurrentSubscriptionApi } from '@myapp/shared/views/price-and-plan-view/api/use-current-subscription-api';
import { useCalculateCurrentPlanStatusColorAndStatus } from '@myapp/shared/views/price-and-plan-view/components/current-subscription/use-calculate-current-plan-status-color-and-status';
import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { UpgradePlanButton } from '../upgrade-plan-button';
import * as Styled from './styles';
import * as SX from './sx';
import type { AccountPopoverSubscriptionPlanProps as Props } from './types';

export const AccountPopoverSubscriptionPlan = memo(({ className }: Props) => {
  const redirect = useRedirect();
  const { data } = useCurrentSubscriptionApi();
  const { label } = useCalculateCurrentPlanStatusColorAndStatus(data);
  const { status } = useSubscriptionExpiryInfo();

  const handleClick = () => redirect(SHARED_ROUTES.priceAndPlan);

  const expire =
    status === SubscriptionExpirationStatus.expiring ||
    status === SubscriptionExpirationStatus.expired;

  const outOfCredit = data?.credit?.used === data?.credit?.charged;

  return (
    <Styled.Wrapper
      className={classnames(
        'AccountPopoverSubscriptionPlan',
        { expire, outOfCredit },
        className
      )}
      onClick={handleClick}
    >
      <Box>
        <Stack>
          <Typography
            variant="caption"
            color={expire || outOfCredit ? 'error.main' : 'primary.50'}
          >
            Current Plan
          </Typography>
          <Typography
            variant="caption"
            color={expire || outOfCredit ? 'error.main' : 'primary.main'}
            sx={SX.currentPlan}
          >
            {data?.current?.status === SubscriptionStatus.ACTIVE ? (
              <>
                <span>{data?.current?.plan?.nickname}</span> /
                <span>{label.split('')[0].toUpperCase()}</span>
              </>
            ) : (
              label
            )}
          </Typography>
        </Stack>
      </Box>
      <Box>
        <UpgradePlanButton />
      </Box>
    </Styled.Wrapper>
  );
});

AccountPopoverSubscriptionPlan.displayName = 'AccountPopoverSubscriptionPlan';
