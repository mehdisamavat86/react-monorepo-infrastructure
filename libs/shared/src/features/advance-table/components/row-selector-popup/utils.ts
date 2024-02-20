import { SelectionMode } from './types';

export const getCheckboxState = (
  size: number,
  included: number,
  excluded: number,
  limit: number,
  mode?: SelectionMode
) => {
  const checked =
    (mode === SelectionMode.ALL && !excluded) ||
    (mode === SelectionMode.NUMBER && size === limit);
  const indeterminate = !checked && (!!size || !!included);
  return { checked, indeterminate };
};
