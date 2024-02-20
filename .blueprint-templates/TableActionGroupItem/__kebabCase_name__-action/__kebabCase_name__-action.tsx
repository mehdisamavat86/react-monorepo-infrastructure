import { Button } from '@mui/material';
import { classnames } from '@myapp/shared/utils/class-names';
import { memo } from 'react';
import * as Styled from './styles';
import type { } from {};
{pascalCase name}}ActionProps as Props } from './types';

export const {{pascalCase name}}Action = memo(({ className, item, onFinish }: Props) => {
  return (
    <Styled.Wrapper className={classnames("{{pascalCase name}}Action", className)}>
      <pre>{JSON.stringify(item, undefined, 2)}</pre>
      <Button onClick={onFinish}>Close</Button>
    </Styled.Wrapper>
  );
});

{{pascalCase name}}Action.displayName = '{{pascalCase name}}Action';
