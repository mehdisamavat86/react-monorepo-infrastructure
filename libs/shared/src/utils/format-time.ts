import { add, format, formatDistanceToNow, type Duration } from 'date-fns';

export type InputValue = Date | string | number | null | undefined;

export const DATE_FORMAT_MMM_DD_YYYY = 'MMM dd, yyyy';
export const DATE_FORMAT_MMM_DD_HH_mm = 'MMM dd, HH:mm';
export const DATE_FORMAT_MMM_DD_YYYY_HH_mm = 'MMM dd, yyyy-HH:mm';
export const DATE_FORMAT_YYYY_MM_DD_HH_mm = 'yyyy-MM-dd HH:mm';
export const DATE_FORMAT_YYYY_MM_DD_hh_mm_a = 'yyyy-MM-dd hh:mm a';

export function newDate(date: InputValue) {
  if (date) date = toMilisecond(date);
  return date ? new Date(date) : undefined;
}

export function newDateFormat(date: InputValue, fm?: string) {
  return date ? format(newDate(date)!, fm || 'basic') : '';
}

export function toMilisecond(date: InputValue) {
  if (typeof date === 'number' && date.toString().length === 10)
    return date * 1000;
  return date;
}

export function fDate(date: InputValue, newFormat?: string) {
  return newDateFormat(date, newFormat || DATE_FORMAT_MMM_DD_YYYY);
}

export function fDateShort(date: InputValue, newFormat?: string) {
  return newDateFormat(date, newFormat || DATE_FORMAT_MMM_DD_HH_mm);
}

export function fDateTime(date: InputValue, newFormat?: string) {
  return newDateFormat(date, newFormat || DATE_FORMAT_YYYY_MM_DD_HH_mm);
}

export function fDateTimeName(date: InputValue, newFormat?: string) {
  return newDateFormat(date, newFormat || 'dd MMM yyyy  HH:mm');
}

export function fTimestamp(date: InputValue) {
  return date ? toMilisecond(date) : '';
}

export function fToNow(date: InputValue) {
  return date
    ? formatDistanceToNow(newDate(date)!, {
        addSuffix: true,
      })
    : '';
}

export function fDateAdd(date: Date | string | number, duration: Duration) {
  try {
    return add(typeof date === 'string' ? Date.parse(date) : date, duration);
  } catch {
    return null;
  }
}

export function dateCompare(
  date1: InputValue,
  date2: InputValue,
  order: 'asc' | 'desc'
) {
  try {
    return order === 'desc'
      ? newDate(date2)!.getTime() - newDate(date1)!.getTime()
      : newDate(date1)!.getTime() - newDate(date2)!.getTime();
  } catch {
    return 0;
  }
}

export function todayTimestamp() {
  const d = new Date();
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  return d.getTime();
}
