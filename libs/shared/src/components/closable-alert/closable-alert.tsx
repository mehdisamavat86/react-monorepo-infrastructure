import { AlertTitle } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo, useState } from 'react';
import * as Styled from './styles';
import type { ClosableAlertProps as Props } from './types';

export const ClosableAlert = memo(
  ({ className, children, onClose, titleSx, ...props }: Props) => {
    const [open, setOpen] = useState(true);

    if (!open) return null;

    return (
      <Styled.Wrapper
        className={classnames('ClosableAlert', className)}
        {...props}
        onClose={(e) => {
          setOpen(false);
          onClose?.(e);
        }}
      >
        <AlertTitle
          sx={{
            fontSize: (p) => p.typography.body2.fontSize,
            margin: 0,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            ...titleSx,
          }}
        >
          {children}
        </AlertTitle>
      </Styled.Wrapper>
    );
  }
);

ClosableAlert.displayName = 'ClosableAlert';
