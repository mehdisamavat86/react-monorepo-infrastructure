import { useNavigate } from 'react-router-dom';
import { Icon } from '@myapp/shared/components';
import { Stack, Typography } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { PricingHeaderProps as Props } from './types';
import { ChangeDuration } from '../change-duration';

export const PricingHeader = memo(({ className }: Props) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Styled.Wrapper
      className={classnames('PricingHeader', className)}
      sx={SX.root}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Styled.BackButton onClick={handleGoBack}>
          <Icon name="arrow-left-fill" size={17} /> Back
        </Styled.BackButton>
        <Stack justifyContent="space-between" alignItems="center" gap={2}>
          <Styled.Title>Plans & Pricing</Styled.Title>
          <Typography sx={SX.heading}>
            Find your buyer with our pricing plans.
          </Typography>
          <ChangeDuration />
        </Stack>
        <Styled.BackButton sx={{ opacity: 0 }} disabled>
          Back
        </Styled.BackButton>
      </Stack>
    </Styled.Wrapper>
  );
});

PricingHeader.displayName = 'PricingHeader';
