import { classnames } from '@myapp/shared/utils';
import { Typography } from '@mui/material';
import { memo } from 'react';
import {
  getMonthlyAmount,
  getYearlyAmount,
} from '../../../../components/subscription-plan-item/utils';
import usePriceAndPlanStore from '../../../../store';
import * as Styled from './styles';
import * as SX from './sx';
import type { PlanPriceProps as Props } from './types';

export const PlanPrice = memo(({ className, plan }: Props) => {
  const yearly = usePriceAndPlanStore.useYearly();

  return (
    <Styled.Wrapper className={classnames('PlanPrice', className)} sx={SX.root}>
      <Typography sx={SX.title}>
        {getMonthlyAmount(plan?.amount || 0, yearly)}
      </Typography>
      <Typography sx={SX.description}>
        Per month
        {yearly &&
          plan?.amount &&
          `, billed ${getYearlyAmount(plan?.amount, yearly)} annually`}
      </Typography>
    </Styled.Wrapper>
  );
});

PlanPrice.displayName = 'PlanPrice';
