import { Maybe } from '@myapp/shared/definition';
import { IconType } from '../icon';

export type NumberRangeInputValue = Maybe<string>;

export type NumberRangeInputTuple = [
  NumberRangeInputValue,
  NumberRangeInputValue
];

export interface NumberRangeInputProps {
  className?: string;
  icon?: IconType;
  min?: number;
  max?: number;
  defaultValue?: NumberRangeInputTuple;
  value?: NumberRangeInputTuple;
  onChangeStart?: (value: NumberRangeInputValue) => void;
  onChangeEnd?: (value: NumberRangeInputValue) => void;
  error?: boolean;
}

export enum InputError {
  INVALID_COMBINATION = 'INVALID_COMBINATION',
  NEGATIVE_NUMBER = 'NEGATIVE_NUMBER',
}
