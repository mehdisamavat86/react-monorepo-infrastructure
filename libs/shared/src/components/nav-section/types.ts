import type { UserRole } from '@myapp/shared/definition';
import type { SxStyle } from '@myapp/shared/theme';
import type { BoxProps, ListItemButtonProps, StackProps } from '@mui/material';
import type { ReactNode } from 'react';
import type { IconType } from '../icon';

export type NavConfigProps = {
  hiddenLabel?: boolean;
  itemGap?: number;
  iconSize?: number;
  itemRadius?: number;
  itemPadding?: string;
  roles?: UserRole[];
  itemSubHeight?: number;
  itemRootHeight?: number;
  listSx?: SxStyle;
  sx?: SxStyle;
};

export type NavItemProps = ListItemButtonProps & {
  item: NavListProps;
  depth: number;
  open?: boolean;
  active: boolean;
  externalLink?: boolean;
};

export type NavListProps = {
  title: string;
  path: string;
  icon?: React.ReactElement;
  info?: React.ReactElement;
  caption?: string;
  disabled?: boolean;
  roles?: UserRole[];
  children?: any;
};

export type NavSectionHeaderProps = (
  | {
      title: ReactNode | { open: ReactNode; close: ReactNode };
      icon?: { open: IconType; close: IconType; action?: ReactNode };
      closable: true;
      actions?: ReactNode;
    }
  | {
      title: ReactNode;
      closable?: false;
    }
) & {
  sx?: BoxProps['sx'];
};

export type NavSectionProps = StackProps & {
  data?: {
    subheader?: string;
    items: NavListProps[];
    divider?: boolean;
  }[];
  config?: NavConfigProps;
  header?: NavSectionHeaderProps;
  prepend?: ReactNode;
  footer?: ReactNode;
};
