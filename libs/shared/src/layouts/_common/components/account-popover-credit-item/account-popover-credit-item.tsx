import { classnames, fNumber, toPercent } from '@myapp/shared/utils';
import { Box, LinearProgress, Typography } from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { AccountPopoverCreditItemProps as Props } from './types';
import { CREDIT_DANGAR_PERCENTAGE } from './constants';

export const AccountPopoverCreditItem = memo(
  ({ className, type, subscription }: Props) => {
    const subPercent = toPercent(
      subscription?.credit?.used,
      subscription?.credit?.charged
    );

    return (
      <Styled.Wrapper
        className={classnames('AccountPopoverCreditItem', className)}
        sx={SX.root}
      >
        <Styled.CreditValueWrapper>
          <Box>
            <Typography variant="body2">{type}</Typography>
          </Box>
          <Styled.CreditValueNumberWrapper>
            <Typography sx={SX.consumedCreditText} variant="caption">
              {fNumber(subscription?.credit?.used || 0)}
            </Typography>
            /
            <Typography sx={SX.totalCreditText} variant="caption">
              {fNumber(subscription?.credit?.charged || 0)}
            </Typography>
          </Styled.CreditValueNumberWrapper>
        </Styled.CreditValueWrapper>
        <Box>
          <LinearProgress
            color={subPercent > CREDIT_DANGAR_PERCENTAGE ? 'error' : 'primary'}
            variant="determinate"
            value={subPercent}
          />
        </Box>
      </Styled.Wrapper>
    );
  }
);

AccountPopoverCreditItem.displayName = 'AccountPopoverCreditItem';
