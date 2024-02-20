import { concat, uniq } from 'lodash-es';
import { useEffect, useState } from 'react';
import type { TableSelectionProps } from './types';

type ReturnType = TableSelectionProps;

export type UseTableSelectionProps = {
  defaultAdd?: string[];
  defaultInclude?: string[];
  defaultExclude?: string[];
};

export function selectionCount(
  added: string[],
  included: string[],
  excluded: string[],
  size: number
) {
  const selected = uniq(concat(added, included));
  return size ? size + selected.length - excluded.length : selected.length;
}

export function useTableSelection(props?: UseTableSelectionProps): ReturnType {
  const [size, setSize] = useState<number>(0);
  const [added, setAdded] = useState<string[]>(props?.defaultAdd ?? []);
  const [included, setIncluded] = useState<string[]>(
    props?.defaultInclude ?? []
  );
  const [excluded, setExcluded] = useState<string[]>(
    props?.defaultExclude || []
  );

  const appendInitialIds = (ids?: string[]) => {
    if (added.length) return;
    ids ||= [];
    setAdded(ids);
    setIncluded(ids);
  };

  const onSelectRowsBySize = (value: number) => {
    setSize(value);
    setAdded(props?.defaultAdd ?? []);
    setExcluded([]);
    setIncluded([]);
  };

  const onSelectRowsById = (ids?: string[]) => {
    setSize(0);
    setIncluded(() => concat(props?.defaultInclude ?? [], ids ?? []));
    setExcluded([]);
  };

  const selectRowWithSize = (index: number, id: string, checked: boolean) => {
    if (!checked) {
      if (added.includes(id)) setAdded(added.filter((x) => x !== id));
      if (index < size) setExcluded(concat(excluded, [id]));
    } else {
      if (excluded.includes(id)) setExcluded(excluded.filter((x) => x !== id));
      if (index >= size) setAdded(concat(added, [id]));
    }
  };

  const selectRowWithoutSize = (id: string, checked: boolean) => {
    if (!checked) {
      if (included.includes(id)) setIncluded(included.filter((x) => x !== id));
    } else {
      if (excluded.includes(id)) setExcluded(excluded.filter((x) => x !== id));
      setIncluded(concat(included, [id]));
    }
  };

  const onSelectTopRow = (id: string) => {
    if (!added.includes(id)) setAdded(concat(added, [id]));
    else setAdded(added.filter((x) => x !== id));
  };

  const isRowSelected = (index: number, id: string) => {
    return (
      added.includes(id) ||
      included.includes(id) ||
      (!!size && index < size && !excluded.includes(id))
    );
  };

  const isTopRowSelected = (id: string) => added.includes(id);

  const onClear = () => {
    setSize(0);
    setAdded(props?.defaultAdd || []);
    setIncluded(props?.defaultInclude ?? []);
    setExcluded([]);
  };

  useEffect(() => {
    setAdded(props?.defaultAdd ?? []);
  }, [props?.defaultAdd]);

  useEffect(() => {
    setIncluded(props?.defaultInclude ?? []);
  }, [props?.defaultInclude]);

  return {
    size,
    count: selectionCount(added, included, excluded, size),
    added,
    setAdded,
    included,
    setIncluded,
    appendInitialIds,
    excluded,
    setExcluded,
    onSelectRowsBySize,
    onSelectRow: (i, ...p) =>
      size ? selectRowWithSize(i, ...p) : selectRowWithoutSize(...p),
    onSelectTopRow,
    onSelectRowsById,
    isRowSelected,
    isTopRowSelected,
    onClear,
  };
}
