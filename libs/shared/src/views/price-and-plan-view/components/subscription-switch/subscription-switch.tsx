import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import usePriceAndPlanStore from '../../store';
import * as Styled from './styles';
import type { SubscriptionSwitchProps as Props } from './types';

export const SubscriptionSwitch = memo(({ className }: Props) => {
  const [yearly, setYearly] = usePriceAndPlanStore((s) => [
    s.yearly,
    s.setYearly,
  ]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearly?.(event.target.checked);
  };

  return (
    <Styled.Wrapper className={classnames('SubscriptionSwitch', className)}>
      <Styled.SwitchTitle checked={!yearly}>Monthly</Styled.SwitchTitle>

      <Styled.Switch checked={yearly} onChange={handleChange} />

      <Styled.SwitchTitle checked={yearly}>Yearly Save 20%</Styled.SwitchTitle>
    </Styled.Wrapper>
  );
});

SubscriptionSwitch.displayName = 'SubscriptionSwitch';
