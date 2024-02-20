import type { AlertProps } from '@mui/material';
import type { PropsWithChildren } from 'react';

export interface GlobalAlertBarProps
  extends PropsWithChildren,
    Pick<AlertProps, 'onClose' | 'severity'> {
  className?: string;
  icon?: JSX.Element | boolean;
  closable?: boolean;
}
