import type { SxStyle } from '@myapp/shared/theme';
import type { PropsWithChildren, ReactNode } from 'react';

export interface DropDownOption<K = string> {
  key: K;
  value?: any;
  label?: ReactNode;
  autoMatchRegex?: RegExp;
  required?: boolean;
}

export type DropDownRenderItem = (
  label: string,
  option: DropDownOption,
  selected: DropDownOption['value']
) => ReactNode;

export interface DropDownProps extends PropsWithChildren {
  className?: string;
  open?: boolean;
  showEmptyOption?: boolean;
  placeholder?: string;
  options: DropDownOption[];
  append?: (selected: DropDownOption['value']) => ReactNode;
  value?: DropDownOption['value'];
  disabled?: boolean;
  multiple?: boolean;
  disabledItems?: string[];
  sx?: SxStyle;
  itemSx?: SxStyle;
  onChange?: (value: DropDownOption['value']) => void;
  renderItem?: DropDownRenderItem;
  renderValue?: (value: any[]) => ReactNode;
}
