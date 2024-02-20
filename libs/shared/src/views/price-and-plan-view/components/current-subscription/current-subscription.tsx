import {
  DateTime,
  ReloadButton,
  SkeletonList,
} from '@myapp/shared/components';
import {
  SubscriptionInterval,
  SubscriptionStatus,
} from '@myapp/shared/definition';
import { classnames, fDateAdd } from '@myapp/shared/utils';
import { Button, Divider, Stack } from '@mui/material';
import { memo, useEffect } from 'react';
import { useCurrentSubscriptionApi } from '../../api/use-current-subscription-api';
import usePriceAndPlanStore from '../../store';
import { Thin } from '../../styles';
import { CancelSubscription } from '../cancel-subscription';
import * as Styled from './styles';
import type { CurrentSubscriptionProps as Props } from './types';
import { useCalculateCurrentPlanStatusColorAndStatus } from './use-calculate-current-plan-status-color-and-status';

export const CurrentSubscription = memo(({ className }: Props) => {
  const { data, isLoading, error, refetch } = useCurrentSubscriptionApi();
  const { color, label } = useCalculateCurrentPlanStatusColorAndStatus(data);
  const setYearly = usePriceAndPlanStore.useSetYearly();

  useEffect(() => {
    if (data)
      setYearly?.(
        data?.current?.plan?.interval === SubscriptionInterval.yearly
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Styled.Wrapper className={classnames('CurrentSubscription', className)}>
      {data && (
        <>
          <Styled.Content>
            <Styled.Title>Currently subscribed to</Styled.Title>
            <Styled.Description>
              Valid Up To:{' '}
              <DateTime
                value={
                  fDateAdd(data?.current?.currentPeriodEnd || '', {
                    years: 1,
                  }) ?? 0
                }
                noTime
              />
            </Styled.Description>
          </Styled.Content>

          <Divider orientation="vertical" flexItem />

          <Button variant="soft" color={color} sx={{ gap: '3px' }}>
            {data?.current?.status === SubscriptionStatus.ACTIVE ? (
              <>
                <span>Plan {data.current.plan?.metadata.name}</span>
                <Thin
                  variant={
                    data?.current?.status === SubscriptionStatus.ACTIVE
                      ? 'caption'
                      : 'body1'
                  }
                >
                  {label}
                </Thin>
              </>
            ) : (
              label
            )}
          </Button>
          <CancelSubscription item={data} />
        </>
      )}

      {isLoading && (
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <SkeletonList
            count={[{ variant: 'text' }, { variant: 'text' }]}
            sx={{ flexDirection: 'column', width: 160 }}
          />
          <SkeletonList count={[{ height: 35, width: 70 }]} />
        </Stack>
      )}

      {error && <ReloadButton onReload={refetch} />}
    </Styled.Wrapper>
  );
});

CurrentSubscription.displayName = 'CurrentSubscription';
