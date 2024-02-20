import { classnames } from '@myapp/shared/utils';
import { useCurrentSubscriptionApi } from '@myapp/shared/views/price-and-plan-view/api/use-current-subscription-api';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { AccountPopoverCreditItem } from '../account-popover-credit-item';
import { AccountPopoverCreditPlanDetail } from '../account-popover-credit-plan-detail';
import * as Styled from './styles';
import * as SX from './sx';
import { CreditType, type AccountPopoverCreditsProps as Props } from './types';

export const AccountPopoverCredits = memo(({ className }: Props) => {
  const { data } = useCurrentSubscriptionApi();

  return (
    <Styled.Wrapper
      className={classnames('AccountPopoverCredits', className)}
      sx={SX.root}
    >
      <Stack sx={SX.stack}>
        {data && (
          <AccountPopoverCreditItem
            type={CreditType.CREDIT}
            subscription={data}
          />
        )}
        <AccountPopoverCreditPlanDetail />
      </Stack>
    </Styled.Wrapper>
  );
});

AccountPopoverCredits.displayName = 'AccountPopoverCredits';
