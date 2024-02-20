import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ActionButtonTextProps as Props } from './types';

export const ActionButtonText = memo(({ className, children }: Props) => {
  return (
    <Styled.Wrapper
      className={classnames('ActionButtonText', className)}
      sx={SX.root}
    >
      {children}
    </Styled.Wrapper>
  );
});

ActionButtonText.displayName = 'ActionButtonText';
