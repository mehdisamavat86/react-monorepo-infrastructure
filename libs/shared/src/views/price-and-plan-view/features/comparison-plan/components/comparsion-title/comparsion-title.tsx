import { useCurrentSubscriptionApi } from '@myapp/shared/views/price-and-plan-view/api/use-current-subscription-api';
import { useBrowseSubscriptionPlanApi } from '@myapp/shared/views/price-and-plan-view/api/use-browse-subscription-plan-api';
import { usePlanList } from '@myapp/shared/views/price-and-plan-view/hooks/use-plan-list';
import { Box, Grid, Stack, Typography } from '@mui/material';
import usePriceAndPlanStore from '@myapp/shared/views/price-and-plan-view/store';
import { classnames, fDate } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ComparsionTitleProps as Props } from './types';
import { getMonthlyAmount } from '../../../../components/subscription-plan-item/utils';

export const ComparsionTitle = memo(({ className }: Props) => {
  const { refetch, error, isLoading } = useBrowseSubscriptionPlanApi();
  const { data } = useCurrentSubscriptionApi();
  const plans = usePlanList();
  const yearly = usePriceAndPlanStore.useYearly();

  const nextPlanId = data?.next?.plan;
  const currentPlanId = data?.current?.plan;

  return (
    <Styled.Wrapper
      className={classnames('ComparsionTitle', className)}
      sx={SX.root}
      direction="row"
      gap={2}
    >
      <Grid container>
        <Grid item xs />
        {plans.map((plan) => (
          <Grid key={plan.id} item xs sx={{ px: 1 }}>
            <Stack
              key={plan.id}
              justifyContent="space-between"
              sx={SX.title}
              direction="row"
              gap={0}
            >
              {(nextPlanId?.id === plan.id ||
                currentPlanId?.id === plan.id) && (
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={1}
                  sx={SX.subInfo(!!(currentPlanId?.id === plan.id))}
                  alignItems="center"
                >
                  <Typography sx={SX.badge(!!(currentPlanId?.id === plan.id))}>
                    {currentPlanId?.id === plan.id
                      ? 'Current Plan'
                      : 'Upcoming Plan'}
                  </Typography>
                  <Box sx={SX.date}>
                    {currentPlanId?.id === plan.id &&
                      `Active until ${fDate(data?.current?.currentPeriodEnd)}`}
                    {nextPlanId?.id === plan.id &&
                      `Effective on ${fDate(data?.next?.startDate)}`}
                  </Box>
                </Stack>
              )}
              <Styled.NickName>{plan.nickname}</Styled.NickName>
              <Styled.Price>
                {getMonthlyAmount(plan?.amount || 0, yearly)}/{' '}
                {plan.interval.replace('m', 'M').replace('y', 'Y')}
              </Styled.Price>
            </Stack>{' '}
          </Grid>
        ))}
      </Grid>
    </Styled.Wrapper>
  );
});

ComparsionTitle.displayName = 'ComparsionTitle';
