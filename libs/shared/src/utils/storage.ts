import { isNil } from 'lodash-es';
import { Nil } from '../definition';

export function localStorageAvailable() {
  try {
    const key = '__some_random_key_you_are_not_going_to_use__';
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export function localStorageGetRaw(key: string, defaultValue: any = null) {
  const storageAvailable = localStorageAvailable();

  let value;

  if (storageAvailable) {
    value = localStorage.getItem(key) || defaultValue;
  }

  return value;
}

export function localStorageGet<T = any>(
  key: string,
  defaultValue: any = null
): Nil<T> {
  try {
    const value = localStorageGetRaw(key, defaultValue) ?? defaultValue;
    return isNil(value) ? undefined : JSON.parse(value);
  } catch (e) {
    return defaultValue as T;
  }
}

export function localStorageSet(key: string, value: any): typeof value {
  const storageAvailable = localStorageAvailable();
  if (storageAvailable) localStorage.setItem(key, JSON.stringify(value));
  return value;
}

export function localStorageRemove(key: string) {
  const storageAvailable = localStorageAvailable();
  if (storageAvailable) localStorage.removeItem(key);
}
