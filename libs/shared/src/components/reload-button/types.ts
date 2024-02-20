import type { LoadingButtonProps } from '@mui/lab';
import type { IconProps, IconType } from '../icon';

export interface ReloadButtonProps
  extends Omit<LoadingButtonProps, 'onClick' | 'onDoubleClick'> {
  className?: string;
  icon?: IconType | false;
  iconProps?: IconProps;
  onReload: () => void;
}
