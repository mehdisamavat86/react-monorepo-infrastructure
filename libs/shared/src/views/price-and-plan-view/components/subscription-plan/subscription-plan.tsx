import { ReloadButton, SkeletonList } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { useBrowseSubscriptionPlanApi } from '../../api/use-browse-subscription-plan-api';
import { usePlanList } from '../../hooks/use-plan-list';
import { CustomPlan } from '../custom-plan';
import { SubscriptionPlanItem } from '../subscription-plan-item';
import { SubscriptionSwitch } from '../subscription-switch';
import { SKELETON_CONFIG, SKELETON_CONFIG_WIDTH } from './config';
import * as Styled from './styles';
import type { SubscriptionPlanProps as Props } from './types';

export const SubscriptionPlan = memo(({ className }: Props) => {
  const { refetch, error, isLoading } = useBrowseSubscriptionPlanApi();
  const items = usePlanList();

  return (
    <>
      <Styled.Wrapper className={classnames('SubscriptionPlan', className)}>
        {!error && (
          <>
            <SubscriptionSwitch />

            <Styled.Scrollbar>
              {!isLoading && (
                <Styled.List>
                  {items.map((i) => (
                    <SubscriptionPlanItem key={i.id} item={i} />
                  ))}
                </Styled.List>
              )}
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
            </Styled.Scrollbar>
          </>
        )}
        {error && <ReloadButton onReload={refetch} />}
      </Styled.Wrapper>
      <CustomPlan />
    </>
  );
});

SubscriptionPlan.displayName = 'SubscriptionPlan';
