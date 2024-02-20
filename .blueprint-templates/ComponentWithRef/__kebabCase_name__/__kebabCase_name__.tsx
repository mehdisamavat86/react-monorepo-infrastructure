import { classnames } from '@myapp/shared/utils';
import { forwardRef } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { } from {};
{pascalCase name}}Props as Props } from './types';

export const {{pascalCase name}} = forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
  return (
    <Styled.Wrapper className={classnames("{{pascalCase name}}", className)} ref={ref} sx={SX.root}>
      <b>{{pascalCase name}}</b>
    </Styled.Wrapper>
  );
});
