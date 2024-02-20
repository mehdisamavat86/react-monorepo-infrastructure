import { SortMode } from '../definition';

// DEV Sayad this is duplicated, please remove one of them
export function sortToStringParam(sort: Record<string, SortMode>) {
  return Object.keys(sort)
    .map((k) => `${k}:${sort[k]}`)
    .join(',');
}
