import { partition } from 'lodash-es';

export function useRowsPartitionedByKey(rows: any[] | undefined, key: string) {
  return partition(rows, [key, true]);
}
