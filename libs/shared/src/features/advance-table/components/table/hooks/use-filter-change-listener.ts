import type { TableProps } from '@myapp/shared/components/table';
import { useDebounceEffect, useQueryStringState } from '@myapp/shared/hooks';
import { objectDiff } from '@myapp/shared/utils';
import { isEmpty, isEqual, omit } from 'lodash-es';

export function useFilterChangeListener(table: TableProps) {
  const { params, previousParams } = useQueryStringState();

  useDebounceEffect(
    () => {
      if (isEqual(previousParams, params)) return;

      const changedParams = objectDiff(previousParams, params);
      const changedNonePaginationParams = omit(changedParams, 'page', 'size');

      if (isEmpty(changedNonePaginationParams)) return;

      table.onResetPage();
    },
    100,
    [params]
  );
}
