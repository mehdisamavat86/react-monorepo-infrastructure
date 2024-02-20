import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { PlanCard } from '../../features/plan-card';
import * as Styled from './styles';
import * as SX from './sx';
import type { PlanItemProps as Props } from './types';

export const PlanItem = memo(({ className, plan }: Props) => {
  const isMostPopular = Boolean(plan?.metadata.most_popular);

  return (
    <Styled.Wrapper
      className={classnames('PlanItem', className)}
      sx={SX.root}
      gap={2}
    >
      <Styled.PlanHeading sx={SX.header(isMostPopular)}>
        {isMostPopular ? 'Most Popular Plan' : `${plan?.nickname} Plan`}
      </Styled.PlanHeading>
      {plan && <PlanCard plan={plan} />}
    </Styled.Wrapper>
  );
});

PlanItem.displayName = 'PlanItem';
