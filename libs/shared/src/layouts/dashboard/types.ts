import type { IconType, NavSectionProps } from '@myapp/shared/components';
import type { SxStyle } from '@myapp/shared/theme';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { ReactNode } from 'react';
import { SvgIconProps } from '@mui/material';
import { AccountMenuOptions } from '../_common/components/settings-menu-items';

export interface DashboardLayoutHeaderOptions {
  start?: ReactNode;
  end?: ReactNode;
  breadcrumb?: ReactNode;
  accountMenu?: AccountMenuOptions;
  logoSx?: SxStyle;
  showThemeModeSwitch?: boolean;
  borderLess?: boolean;
}

export interface DashboardLayoutOptions {
  sx?: SxStyle;
  topElement?: ReactNode;
  header?: DashboardLayoutHeaderOptions;
  navigation?: NavSectionProps;
  hideSideBar?: boolean;
  hideHeader?: boolean;
  hideNavVertical?: boolean;
  headerGap?: number;
  sidebar?: DashboardSidebarOptions;
}

export interface DashboardSidebarOptions {
  items: DashboardSidebarItem[];
}

export interface DashboardSidebarItem {
  title: string;
  description: string;
  icon?: (p: SvgIconProps, active?: boolean) => EmotionJSX.Element;
  enabled?: boolean;
  subItems?: DashboardSidebarSubItem[];
}

export interface DashboardSidebarSubItem {
  title: string;
  icon: IconType;
  route: string;
}
