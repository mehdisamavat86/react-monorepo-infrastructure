import { SubscriptionExpirationStatus } from '@myapp/shared/features/global-notification-bar/components/subscription-bar';
import { useSubscriptionExpiryInfo } from '@myapp/shared/features/global-notification-bar/components/subscription-bar/hooks/use-subscription-expiry-info';
import { classnames } from '@myapp/shared/utils';
import { Box, Tooltip, Typography } from '@mui/material';
import { memo } from 'react';
import { AccountPopoverCreditPlanDurationPart } from '../account-popover-credit-plan-duration-part';
import * as Styled from './styles';
import * as SX from './sx';
import type { AccountPopoverCreditPlanDetailProps as Props } from './types';

export const AccountPopoverCreditPlanDetail = memo(({ className }: Props) => {
  const { status, remainingDuration } = useSubscriptionExpiryInfo();

  return (
    <Styled.Wrapper
      className={classnames('AccountPopoverCreditPlanDetail', className)}
      sx={SX.root}
    >
      <Box sx={SX.remainingDaysWrapper}>
        {status === SubscriptionExpirationStatus.active && (
          <>
            <AccountPopoverCreditPlanDurationPart
              type="years"
              value={remainingDuration}
              label="Year"
            />
            <AccountPopoverCreditPlanDurationPart
              type="months"
              value={remainingDuration}
              label="Month"
            />
            <AccountPopoverCreditPlanDurationPart
              type="days"
              value={remainingDuration}
              label="Day"
            />

            <Tooltip
              title={`Credits will renew according to package. 
              Renewal cycle is monthly even if the package is yearly.`}
            >
              <Styled.PlanRemainingTimeInfoIcon
                name="info"
                size={16}
                color="grey.400"
              />
            </Tooltip>
          </>
        )}
      </Box>
      <Box>
        <Typography variant="caption">View Details</Typography>
      </Box>
    </Styled.Wrapper>
  );
});

AccountPopoverCreditPlanDetail.displayName = 'AccountPopoverCreditPlanDetail';
