import type { Dayjs } from 'dayjs';

export type DateRangePickerValue = Dayjs | null;
export type DateRangePickerTuple = [DateRangePickerValue, DateRangePickerValue];

export interface DateRangePickerProps {
  className?: string;
  value?: DateRangePickerTuple;
  defaultValue?: DateRangePickerTuple;
  onChangeStart?: (value?: DateRangePickerValue) => void;
  onChangeEnd?: (value?: DateRangePickerValue) => void;
}

export interface ClearButtonProps {
  onClick: VoidFunction;
}
