import { IconType } from '@myapp/shared/components';

export interface SettingsMenuItemsProps {
  className?: string;
  items?: AccountMenuItem[];
  onClickItem?: VoidFunction;
  searchEnabled?: boolean;
}

export enum AccountMenuItemType {
  LINK = 'LINK',
  TITLE = 'TITLE',
  DIVIDER = 'DIVIDER',
}

export type AccountMenuItem = {
  key?: string;
  label: string;
  linkTo?: string;
  icon?: IconType;
  type?: AccountMenuItemType;
  disabled?: boolean;
  blank?: boolean;
};

export type AccountMenuOptions = {
  items?: AccountMenuItem[];
};
