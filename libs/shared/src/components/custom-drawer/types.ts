import type { DrawerProps } from '@mui/material';
import type { UseBoolean } from '@myapp/shared/hooks';
import type { SxStyle } from '@myapp/shared/theme';
import type { ReactNode } from 'react';
import type { IconType } from '../icon';

export interface CustomDrawerProps {
  width?: number;
  className?: string;
  title?: string;
  titleSx: SxStyle;
  children?: ReactNode;
  uncontrolledElement?: JSX.Element;
  contentWrapperSx?: SxStyle;
  content?: ReactNode;
  icon?: IconType;
  position?: DrawerProps['anchor'];
  defaultOpen?: boolean;
  onOpen?: VoidFunction;
  onClose?: VoidFunction;
  state?: UseBoolean;
}
