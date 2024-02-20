import { Icon } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { Button, Stack } from '@mui/material';
import { memo } from 'react';
import { useCurrentSubscriptionApi } from '../../api/use-current-subscription-api';
import { PlanCardHeader } from './components/plan-card-header';
import { PlanFeatures } from './components/plan-features';
import { PlanIncludes } from './components/plan-includes';
import { PlanPrice } from './components/plan-price';
import * as Styled from './styles';
import * as SX from './sx';
import type { PlanCardProps as Props } from './types';
import { usePlanConfig } from '../../hooks/use-plan-config';
import { DialogProvider } from '../../context';
import { PlanSubscribe } from './components/plan-subscribe';

export const PlanCard = memo(({ className, plan }: Props) => {
  const isMostPopular = Boolean(plan?.metadata.most_popular);
  const { data } = useCurrentSubscriptionApi();
  const config = usePlanConfig(plan, data);

  return (
    <DialogProvider>
      <Styled.Wrapper
        className={classnames('PlanCard', className)}
        sx={SX.root(isMostPopular)}
      >
        <PlanCardHeader
          plan={plan}
          currentPlan={config.current}
          nextPlan={config.next}
        />
        <PlanPrice plan={plan} />
        <PlanFeatures plan={plan} />
        <PlanSubscribe plan={plan} config={config} />
        <PlanIncludes plan={plan} />
        <Button sx={SX.compareBtn(isMostPopular)} rel="plan-card-btn">
          Comparison Plan
          <Stack
            component="span"
            justifyContent="center"
            alignItems="center"
            sx={SX.iconBox}
          >
            <Icon name="arrow-dropdown-down" sxx={SX.icon} />
          </Stack>
        </Button>
      </Styled.Wrapper>
    </DialogProvider>
  );
});

PlanCard.displayName = 'PlanCard';
