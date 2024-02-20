import { Icon } from '@myapp/shared/components';
import { Box, Stack, Typography } from '@mui/material';
import { SHARED_ROUTES } from '@myapp/shared/constants';
import { memo } from 'react';
import { Link, useMatch } from 'react-router-dom';
import * as Styled from './styles';
import * as SX from './sx';
import type { BillingStatusProps as Props } from './types';

export const BillingStatus = memo(({ className }: Props) => {
  const isSuccess = !!useMatch(SHARED_ROUTES.billingStatusSuccess);
  return (
    <Styled.Wrapper justifyContent="center" alignItems="center">
      <Styled.Card justifyContent="center">
        <Stack justifyContent="center" alignItems="center" gap={5}>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={SX.iconWrapper(isSuccess)}
          >
            <Icon
              name={isSuccess ? 'confirm' : 'close'}
              sxx={SX.icon(isSuccess)}
              size={isSuccess ? 35 : 25}
            />
          </Stack>
          <Box sx={SX.paymentMessage(isSuccess)}>
            {isSuccess ? 'Payment Successful' : 'Payment Failed'}
          </Box>
          <Typography sx={SX.paymentDescription(isSuccess)}>
            {isSuccess
              ? 'Your Payment was successful'
              : 'Your payment has been failed'}
          </Typography>
          <Styled.Image src="/assets/images/squiggle.svg" alt="Squiggle" />
        </Stack>
        <Styled.CardBottom direction="row" gap={2}>
          {Array(20)
            .fill(1, 0, 20)
            .map((i) => (
              <Box component="div" key={i} sx={SX.dot} />
            ))}
        </Styled.CardBottom>
      </Styled.Card>
      <Link
        to={isSuccess ? SHARED_ROUTES.dashboard : SHARED_ROUTES.priceAndPlan}
      >
        <Styled.CallbackBtn>
          <Icon name="arrow-left-fill" />
          {isSuccess ? 'Go to Dashboard' : 'Go to Plans & Price'}
        </Styled.CallbackBtn>
      </Link>
    </Styled.Wrapper>
  );
});

BillingStatus.displayName = 'BillingStatus';
