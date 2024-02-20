import { Stack } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { forwardRef } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ComparisonPlanProps as Props } from './types';
import { ComprasionLogo } from './components/comprasion-logo';
import { useBrowseSubscriptionPlanApi } from '../../api/use-browse-subscription-plan-api';
import { usePlanList } from '../../hooks/use-plan-list';
import { ComparisonItem } from './components/comparison-item';
import { ComparsionTitle } from './components/comparsion-title';

export const ComparisonPlan = forwardRef<HTMLDivElement, Props>(
  ({ className }, ref) => {
    const { refetch, error, isLoading } = useBrowseSubscriptionPlanApi();
    const plans = usePlanList();

    const compareTitle = [
      'AI-Elephants Credits',
      'Record Selection Limit',
      'View Filter Results',
      'AI Semantic Search',
      'AI Lookalike Search',
      'B2B Company Basic Filters',
      'Unused Credit Rollover',
      'B2B Company Advanced Filters',
    ];
    return (
      <Styled.Wrapper
        ref={ref}
        className={classnames('ComparisonPlan', className)}
        sx={SX.root}
      >
        <Stack justifyContent="center" alignItems="center" gap={8}>
          <ComprasionLogo />
          <Stack sx={{ width: '100%' }} direction="column">
            <ComparsionTitle />
            {plans.length > 0 &&
              compareTitle.map((i) => (
                <ComparisonItem key={i} item={i} plans={plans} />
              ))}
          </Stack>
        </Stack>
      </Styled.Wrapper>
    );
  }
);

ComparisonPlan.displayName = 'ComparisonPlan';
