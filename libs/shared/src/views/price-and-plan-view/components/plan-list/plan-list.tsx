import { ReloadButton, SkeletonList } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { PlanListProps as Props } from './types';
import { PlanItem } from '../plan-item';
import { useBrowseSubscriptionPlanApi } from '../../api/use-browse-subscription-plan-api';
import { usePlanList } from '../../hooks/use-plan-list';
import {
  SKELETON_CONFIG,
  SKELETON_CONFIG_WIDTH,
} from '../subscription-plan/config';

export const PlanList = memo(({ className }: Props) => {
  const { refetch, isError, isLoading } = useBrowseSubscriptionPlanApi();
  const plans = usePlanList();

  return (
    <Styled.Wrapper
      className={classnames('PlanList', className)}
      sx={SX.root}
      direction="row"
      overflow="auto"
      gap={3}
    >
      {plans.map((plan) => (
        <PlanItem key={plan.id} plan={plan} />
      ))}

      {isLoading && (
        <SkeletonList
          count={SKELETON_CONFIG}
          sx={{
            gap: 1.5,
            flexDirection: 'row',
            justifyContent: 'center',
            minWidth: SKELETON_CONFIG_WIDTH,
          }}
        />
      )}

      {isError && refetch && (
        <ReloadButton loading={isLoading} onReload={refetch} />
      )}
    </Styled.Wrapper>
  );
});

PlanList.displayName = 'PlanList';
