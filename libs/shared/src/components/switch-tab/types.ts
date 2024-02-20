import type { Nil } from '@myapp/shared/definition';
import { ButtonProps } from '@mui/material';
import type { IconType } from '../icon';

export interface SwitchTabItem {
  key: string;
  title: string;
  path: string;
  icon?: Nil<IconType>;
}

export interface SwitchTabProps {
  className?: string;
  options: SwitchTabItem[];
  activeProps?: ButtonProps;
  inActiveProps?: ButtonProps;
}
