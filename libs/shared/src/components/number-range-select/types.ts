import { IconType } from '../icon';
import {
  NumberRangeInputTuple,
  NumberRangeInputValue,
} from '../number-range-input';

export interface NumberRangeSelectProps {
  className?: string;
  icon?: IconType;
  min?: number;
  max?: number;
  defaultValue?: NumberRangeInputTuple;
  value?: NumberRangeInputTuple;
  onChangeStart?: (value: NumberRangeInputValue) => void;
  onChangeEnd?: (value: NumberRangeInputValue) => void;
  options: SelectItem[];
}

export type SelectItem = {
  value: string;
  label: string;
};
