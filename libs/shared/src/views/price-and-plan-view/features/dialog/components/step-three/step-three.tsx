import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { StepThreeProps as Props } from './types';

export const StepThree = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper className={classnames('StepThree', className)} sx={SX.root}>
      <b>StepThree</b>
    </Styled.Wrapper>
  );
});

StepThree.displayName = 'StepThree';
