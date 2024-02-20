import { IconType } from '@myapp/shared/components';
import { SxStyle } from '@myapp/shared/theme';

export interface SidebarSingleItemProps {
  className?: string;
  title: string;
  icon: IconType;
  route?: string;
  open?: boolean;
  sx?: SxStyle;
}
