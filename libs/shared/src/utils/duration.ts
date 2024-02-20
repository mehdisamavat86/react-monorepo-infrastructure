import { intervalToDuration as intervalToDurationBase } from 'date-fns';
import { random } from 'lodash-es';
import ms from 'ms';

export type DurationType =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year';

export function duration(value: number, type: DurationType, second = false) {
  return ms(`${value} ${type}s`) / (second ? 1000 : 1);
}

export function intervalToDuration(value: number | Date) {
  return intervalToDurationBase({
    start: new Date(),
    end: value,
  });
}

export const DURATION_MS = {
  valueOf: (value: number = 1) => value,
  second: duration(1, 'second'),
  seconds: (value: number = 1) => duration(value, 'second'),
  minute: duration(1, 'minute'),
  minutes: (value: number = 1) => duration(value, 'minute'),
  hour: duration(1, 'hour'),
  hours: (value: number = 1) => duration(value, 'hour'),
  day: duration(1, 'day'),
  days: (value: number = 1) => duration(value, 'day'),
  week: duration(1, 'week'),
  weeks: (value: number = 1) => duration(value, 'week'),
  month: duration(1, 'month'),
  months: (value: number = 1) => duration(value, 'month'),
  year: duration(1, 'year'),
  years: (value: number = 1) => duration(value, 'year'),
};

export const DURATION_S = {
  second: duration(1, 'second', true),
  seconds: (value: number = 1) => duration(value, 'second', true),
  minute: duration(1, 'minute', true),
  minutes: (value: number = 1) => duration(value, 'minute', true),
  hour: duration(1, 'hour', true),
  hours: (value: number = 1) => duration(value, 'hour', true),
  day: duration(1, 'day', true),
  days: (value: number = 1) => duration(value, 'day', true),
  week: duration(1, 'week', true),
  weeks: (value: number = 1) => duration(value, 'week', true),
  month: duration(1, 'month', true),
  months: (value: number = 1) => duration(value, 'month', true),
  year: duration(1, 'year', true),
  years: (value: number = 1) => duration(value, 'year', true),
};

export function randomDurationMili(type: DurationType, min = 0, max = 1) {
  return DURATION_S[type] * random(min, max);
}
