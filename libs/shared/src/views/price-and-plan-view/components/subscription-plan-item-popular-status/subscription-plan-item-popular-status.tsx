import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { SubscriptionPlanItemPopularStatusProps as Props } from './types';

export const SubscriptionPlanItemPopularStatus = memo(
  ({ className, config }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('SubscriptionPlanItemPopularStatus', className)}
        sx={{ ...SX.root, background: config.titleColor }}
      >
        Most Popular
      </Styled.Wrapper>
    );
  }
);

SubscriptionPlanItemPopularStatus.displayName =
  'SubscriptionPlanItemPopularStatus';
