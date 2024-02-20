import { SxStyle } from '@myapp/shared/theme';
import { MouseEventHandler, PropsWithChildren } from 'react';

export interface RowSelectorPopupWrapperProps extends PropsWithChildren {
  className?: string;
  onClick: MouseEventHandler<HTMLElement>;
  sx?: SxStyle;
  count?: number;
  disabled?: boolean;
  state?: { checked: boolean; indeterminate: boolean };
}
