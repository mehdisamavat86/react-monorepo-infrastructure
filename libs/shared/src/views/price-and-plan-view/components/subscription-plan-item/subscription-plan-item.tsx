import { classnames, fNumber } from '@myapp/shared/utils';
import { memo } from 'react';

import { SubscriptionStatus } from '@myapp/shared/definition';
import { Box } from '@mui/material';
import { useCurrentSubscriptionApi } from '../../api/use-current-subscription-api';
import { usePlanConfig } from '../../hooks/use-plan-config';
import usePriceAndPlanStore from '../../store';
import { Thin } from '../../styles';
import { SubscriptionPlanItemPopularStatus } from '../subscription-plan-item-popular-status';
import { UpgradePlan } from '../upgrade-plan';
import * as Styled from './styles';
import type { SubscriptionPlanItemProps as Props } from './types';
import { getMonthlyAmount, getYearlyAmount, isPopularPlan } from './utils';

export const SubscriptionPlanItem = memo(({ className, item }: Props) => {
  const yearly = usePriceAndPlanStore.useYearly();
  const { data } = useCurrentSubscriptionApi();
  const currentPlan = data?.current;
  const active =
    item.id === currentPlan?.plan?.id &&
    currentPlan?.status !== SubscriptionStatus.CANCELED;
  const config = usePlanConfig(item, data);
  const iSPopular = isPopularPlan(item, data);

  return (
    <Styled.Wrapper
      className={classnames('SubscriptionPlanItem', className, {
        active,
        iSPopular,
      })}
    >
      {iSPopular && (
        <SubscriptionPlanItemPopularStatus item={item} config={config} />
      )}

      <Styled.ContentWrapper>
        <Styled.Box>
          <Styled.Title
            color={config.color}
            sx={{ color: config.textColor, background: config.titleColor }}
          >
            {item?.metadata?.name}
          </Styled.Title>

          <Styled.Content>
            <Styled.AmountMonth>
              {getMonthlyAmount(item.amount, yearly)}
              {!!item.amount && <Thin>/ Month</Thin>}
            </Styled.AmountMonth>

            <Styled.Credit>
              {fNumber(item.metadata.request)} Credits
            </Styled.Credit>

            {!!item.amount && (
              <Styled.Year>
                {getYearlyAmount(item.amount, yearly)} <Thin>/ Year</Thin>
              </Styled.Year>
            )}
          </Styled.Content>
        </Styled.Box>

        {item.trial ? (
          <Box sx={{ py: 1 }} />
        ) : (
          <UpgradePlan item={item} config={config} />
        )}
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
});

SubscriptionPlanItem.displayName = 'SubscriptionPlanItem';
