import { isObject } from 'lodash-es';
import { BoolStr } from '../definition';

export function joinStrings(...params: (string | undefined)[]) {
  const sep = params.pop();
  return params.filter(Boolean).join(sep);
}

export function boolStr(v?: boolean): BoolStr {
  return v ? 'true' : 'false';
}

export function stripSlashesFromJson(value?: any) {
  if (typeof value === 'string')
    value = value.replace(/\\+"/g, '"').replace(/^"+/, '').replace(/"+$/, '');
  return value;
}

export function jsonParse<T = any, U = any | null>(
  value?: any,
  defaultValue?: U
): T | U {
  if (isObject(value)) return value as T;

  try {
    return JSON.parse(stripSlashesFromJson(value)) as T;
  } catch {
    if (typeof value === 'string') return stripSlashesFromJson(value) as T;
    return (defaultValue ?? null) as U;
  }
}

export function isValidJsonString(value: any) {
  return typeof value === 'string' && !!jsonParse(value);
}

export function jsonStringify(value?: any, indent = 0): string | null {
  try {
    return isValidJsonString(stripSlashesFromJson(value))
      ? stripSlashesFromJson(value)
      : JSON.stringify(value, undefined, indent);
  } catch {
    return null;
  }
}

export function formatString(template: string, ...args: string[]) {
  return template.replace(/{([0-9]+)}/g, (match, index) => {
    return typeof args[index] === 'undefined' ? match : args[index];
  });
}

export function searchText(value: string, keyword: string) {
  return value.search(new RegExp(keyword, 'i'));
}
