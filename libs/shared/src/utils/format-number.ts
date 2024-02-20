import { repeat } from 'lodash-es';
import numeral from 'numeral';

type InputValue = string | number | null;

export function fNumber(number: InputValue) {
  return numeral(number).format();
}

export function fCurrency(number: InputValue, precision = 2) {
  const precisionFormat = precision ? `.${repeat('0', precision)}` : '';
  const format = number
    ? numeral(number).format(`$0,${precisionFormat}`)
    : '$0';

  return result(format, precisionFormat);
}

export function fPercent(number: InputValue) {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';

  return result(format, '.0');
}

export function fShortenNumber(number: InputValue) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

export function fData(number: InputValue) {
  const format = number ? numeral(number).format('0.0 b') : '';

  return result(format, '.0');
}

function result(format: string, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}

export function toNumber(value?: any, defaultValue?: number) {
  const num = +value;

  if (!Number.isNaN(num)) return num;

  return defaultValue;
}

export function toFixedNumber(
  value: number,
  precision = 2,
  trimRightZeros = true
) {
  const val = value.toFixed(precision);
  return trimRightZeros ? val.replace(/\.0+$/, '') : val;
}

const HUMAN_FILE_SIZE_VALUES = ['', 'K', 'M', 'G', 'T'];
export function fHumanReadableNumber(
  size = 0,
  decimalPlaces = 1,
  separator: '' | ' ' = ''
) {
  if (!size) return 0;
  const val = Math.floor(Math.log(size) / Math.log(1000));
  return (size / 1000 ** val)
    .toFixed(decimalPlaces)
    .replace(/\.0+$/, '')
    .concat(separator)
    .concat(HUMAN_FILE_SIZE_VALUES.at(val) || '')
    .trim();
}

const HUMAN_CURRENCY_VALUES = ['', 'K', 'M', 'B', 'T'];
export function fHumanReadableCurrency(
  size = 0,
  decimalPlaces = 1,
  separator: '' | ' ' = ''
) {
  if (!size) return 0;
  const val = Math.floor(Math.log(size) / Math.log(1000));
  return (size / 1000 ** val)
    .toFixed(decimalPlaces)
    .replace(/\.0+$/, '')
    .concat(separator)
    .concat(HUMAN_CURRENCY_VALUES.at(val) || '')
    .trim();
}
export const toPercent = (number1?: number, number2?: number) => {
  return ((number1 || 0) / (number2 || 0)) * 100;
};

export const isNumeric = (value: string) => {
  return /^-?\d+$/.test(value);
};
