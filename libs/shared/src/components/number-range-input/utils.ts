import { NumberRangeInputTuple } from './types';

export function getNumberRangeValues(value?: NumberRangeInputTuple) {
  return value
    ? [value.at(0) ? value.at(0) : '', value.at(1) ? value.at(1) : '']
    : [null, null];
}
