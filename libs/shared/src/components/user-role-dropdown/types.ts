import type { SxStyle } from '@myapp/shared/theme';

export interface UserRoleDropdownProps {
  className?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  label?: string;
  withoutOwner?: boolean;
  sx?: SxStyle;
}

export type UserRoleOptionType = {
  value: string;
  label: string;
};
