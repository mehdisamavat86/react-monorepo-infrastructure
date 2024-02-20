import type { SxStyle } from '@myapp/shared/theme';
import type { CustomPopoverProps } from '../custom-popover';
import type { PopoverType } from '../custom-popover/use-popover';
import type { IconType } from '../icon';
import type { IconButtonProps } from '../icon-button';

export interface PopoverListButtonItem {
  key: string | number;
  label: JSX.Element | string;
  icon?: IconType;
}

export interface PopoverListButtonProps {
  className?: string;
  items: PopoverListButtonItem[];
  itemSx?: SxStyle;
  itemDivider?: boolean;
  icon?: IconType;
  buttonElement?: CustomPopoverProps['element'];
  closeAfterSelect?: boolean;
  buttonProps?: Omit<IconButtonProps, 'icon' | 'onClick'>;
  onSelect?: (item: PopoverListButtonItem, state: PopoverType) => void;
}
