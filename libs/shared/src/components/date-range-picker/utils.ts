import { toNumber } from '@myapp/shared/utils';
import dayjs from 'dayjs';
import { DateRangePickerTuple } from './types';

export function getDateRangePickerValues(value?: DateRangePickerTuple) {
  return value
    ? [
        value[0] ? dayjs(toNumber(value[0])) : null,
        value[1] ? dayjs(toNumber(value[1])) : null,
      ]
    : [null, null];
}
