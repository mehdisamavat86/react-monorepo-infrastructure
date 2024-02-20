import { SxStyle } from '@myapp/shared/theme';
import { IconType } from '../icon';

export interface CustomMultiselectProps {
  className?: string;
  options: Option[];
  chipSX?: SxStyle;
  deleteIconSx?: SxStyle;
  deleteIconSize?: number;
  optionSx?: SxStyle;
  chipIcon?: IconType;
  chipIconSx?: SxStyle;
  inputSx?: SxStyle;
}

export interface Option {
  title: string;
  value: string;
  count?: number;
  icon?: IconType;
}
