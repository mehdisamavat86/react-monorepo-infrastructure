import { forEach, isEqual, isNil, mapValues, merge, pickBy } from 'lodash-es';
import { Nil } from '../definition';

export function objSanitizeNilValues<T = Record<string, any>>(
  obj?: Record<string, any>
): T {
  return pickBy(obj, (v) => !isNil(v)) as T;
}

export function isPrimitiveType(val: any) {
  return !(typeof val === 'function' || (typeof val === 'object' && val));
}

export function objectDiff<T>(
  objectA?: Nil<Partial<T> | Record<string, any>>,
  objectB?: Nil<Partial<T> | Record<string, any>>
) {
  objectB ||= {};
  objectA = merge(
    mapValues(objectB, () => null),
    objectA
  );
  const diff: Record<string, any> = {};

  forEach(objectA, (value, key) => {
    if (!isEqual(value, (objectB as any)[key])) {
      diff[key] = (objectB as any)[key];
    }
  });

  return diff as Partial<T>;
}
