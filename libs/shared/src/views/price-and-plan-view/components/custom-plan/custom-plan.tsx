import { Icon } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { CustomPlanProps as Props } from './types';

export const CustomPlan = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper className={classnames('CustomPlan', className)}>
      <Styled.WrapperStart>
        <Styled.Title>Custom Plan</Styled.Title>

        <Styled.NeedMore>
          Needs more? <br /> Tell us about your needs.
        </Styled.NeedMore>
      </Styled.WrapperStart>
      <Styled.WrapperEnd>
        <Styled.Button variant="contained" color="primary" fullWidth>
          <Icon name="target" />
          Contact us
        </Styled.Button>
      </Styled.WrapperEnd>
    </Styled.Wrapper>
  );
});

CustomPlan.displayName = 'CustomPlan';
