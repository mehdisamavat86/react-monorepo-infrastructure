import { classnames } from '@myapp/shared/utils';
import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { fDate } from '../../../../../../utils/format-time';
import * as Styled from './styles';
import * as SX from './sx';
import type { PlanCardHeaderProps as Props } from './types';

export const PlanCardHeader = memo(
  ({ className, plan, currentPlan, nextPlan }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('PlanCardHeader', className)}
        sx={SX.root}
      >
        {(currentPlan || nextPlan) && (
          <Styled.Current>
            <Styled.Badge component="span" sx={SX.Badge(Boolean(nextPlan))}>
              {currentPlan ? 'Current Plan' : 'Upcoming Plan'}
            </Styled.Badge>
            <Box sx={SX.date}>
              {currentPlan &&
                `Active until ${
                  currentPlan?.currentEnd && fDate(currentPlan.currentEnd)
                }`}
              {nextPlan && `Effective on ${fDate(nextPlan?.nextStart)}`}
            </Box>
          </Styled.Current>
        )}
        <Stack>
          <Typography sx={SX.title}>{plan?.nickname}</Typography>
        </Stack>
        <Typography sx={SX.description}>
          {plan?.metadata.description}{' '}
        </Typography>
      </Styled.Wrapper>
    );
  }
);

PlanCardHeader.displayName = 'PlanCardHeader';
