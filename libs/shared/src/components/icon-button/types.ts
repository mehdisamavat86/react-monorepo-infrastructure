import type { ButtonProps } from '@mui/material';
import type { IconType } from '../icon/types';

export interface IconButtonProps extends ButtonProps {
  className?: string;
  title?: string;
  tooltipTitle?: string;
  icon?: IconType;
  iconColor?: string;
  square?: true | number;
}
