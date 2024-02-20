import type { IconType } from '@myapp/shared/components';
import type { SxStyle } from '@myapp/shared/theme';
import type { ButtonProps } from '@mui/material';
import type { HTMLAttributeAnchorTarget } from 'react';

export type SidebarQuickAccessButtonPickedProps = Pick<
  ButtonProps,
  'variant' | 'color'
>;

export interface SidebarQuickAccessButtonProps
  extends SidebarQuickAccessButtonPickedProps {
  className?: string;
  title: string;
  titleMini?: string;
  icon?: IconType;
  endIcon?: IconType;
  titleSx?: SxStyle;
  to: string;
  target?: HTMLAttributeAnchorTarget;

  miniProps?: SidebarQuickAccessButtonPickedProps;
}
