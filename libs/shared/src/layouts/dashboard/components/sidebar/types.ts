import { IconType } from '@myapp/shared/components';
import { DashboardSidebarOptions } from '../../types';

export interface SidebarProps {
  className?: string;
  options?: DashboardSidebarOptions;
}

export type PanelSubItem = {
  icon: IconType;
  title: string;
  link: string;
};
