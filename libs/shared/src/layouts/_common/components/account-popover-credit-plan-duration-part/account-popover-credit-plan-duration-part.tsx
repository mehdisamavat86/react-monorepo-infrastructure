import { memo } from 'react';
import * as Styled from './styles';
import type { AccountPopoverCreditPlanDurationPartProps as Props } from './types';

export const AccountPopoverCreditPlanDurationPart = memo(
  ({ className, type, value, label }: Props) => {
    if (!value[type]) return null;
    return (
      <>
        <Styled.PlanRemainingTimeValue variant="caption" color="primary">
          {value[type]}
        </Styled.PlanRemainingTimeValue>
        <Styled.PlanRemainingTimeUnit variant="caption">
          {label}
          {!(value[type] === 1) && 's'}
        </Styled.PlanRemainingTimeUnit>
      </>
    );
  }
);

AccountPopoverCreditPlanDurationPart.displayName =
  'AccountPopoverCreditPlanDurationPart';
