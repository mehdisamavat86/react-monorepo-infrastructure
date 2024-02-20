import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { } from {};
{pascalCase name}}Props as Props } from './types';

export const {{pascalCase name}} = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper className={classnames("{{pascalCase name}}", className)} sx={SX.root}>
      <b>{{pascalCase name}}</b>
    </Styled.Wrapper>
  );
});

{{pascalCase name}}.displayName = '{{pascalCase name}}';
