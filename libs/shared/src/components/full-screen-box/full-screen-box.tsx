import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { FullScreenBoxProps as Props } from './types';

export const FullScreenBox = memo(
  ({ className, sx, children, onTop, ...other }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('FullScreenBox', className)}
        sx={{
          right: 0,
          width: 1,
          bottom: 0,
          height: 1,
          zIndex: onTop ? 9998 : undefined,
          display: 'flex',
          position: 'fixed',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          ...sx,
        }}
        {...other}
      >
        {children}
      </Styled.Wrapper>
    );
  }
);

FullScreenBox.displayName = 'FullScreenBox';
