import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { BooleanLabelProps as Props } from './types';

export const BooleanLabel = memo(({ className, value, yes, no }: Props) => {
  return (
    <Styled.Wrapper
      className={classnames('BooleanLabel', className)}
      color={value ? 'success' : 'error'}
    >
      {value ? yes || 'Yes' : no || 'No'}
    </Styled.Wrapper>
  );
});

BooleanLabel.displayName = 'BooleanLabel';
