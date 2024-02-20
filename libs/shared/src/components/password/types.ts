import type { RHFTextFieldProps } from '../hook-form/rhf-text-field';
import type { IconType } from '../icon';

export type PasswordProps = Omit<
  RHFTextFieldProps,
  'name' | 'label' | 'type' | 'InputProps' | 'onChange'
> & {
  className?: string;
  name: string;
  label: string;
  showHint?: boolean;
};

export enum CheckPasswordRule {
  length = 'length',
  upper = 'upper',
  lower = 'lower',
  digit = 'digit',
  symbol = 'symbol',
}

export interface CheckPassword {
  title?: string;
  icon?: IconType;
  condition: CheckPasswordRule;
}

export interface PasswordHintProps {
  className?: string;
  value: string;
}
