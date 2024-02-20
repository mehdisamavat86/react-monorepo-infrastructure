import { times } from 'lodash-es';

export function repeat(value: any, count = 1) {
  return times(count ?? 1, () => value);
}

/* 
  Sorts an array of objects based on another array order
*/
export function mapOrder(array: any[], orderArray: any[], orderKey: string) {
  array.sort((a, b) => {
    const A = a[orderKey];
    const B = b[orderKey];

    if (orderArray.indexOf(A) > orderArray.indexOf(B)) {
      return 1;
    }
    return -1;
  });

  return array;
}
