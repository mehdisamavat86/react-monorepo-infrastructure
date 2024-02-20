import type { TableProps } from '@myapp/shared/components';
import { createPaginationResponse } from '@myapp/shared/http';
import type { AdvanceTableConfig, BrowseData } from '../../types';

export function toBrowseApiData(
  data: BrowseData<any>,
  { page, rowsPerPage }: TableProps
) {
  const from = page * rowsPerPage;
  return {
    data: createPaginationResponse({
      content: data.data?.slice(from, from + rowsPerPage),
      number: page,
      size: rowsPerPage,
      totalElements: data.data?.length || 0,
    }),
    isLoading: data.isLoading,
  };
}

export function calculateTableSort(
  table: TableProps,
  appendedSort: AdvanceTableConfig['prependSortingFields']
) {
  const fields = { ...appendedSort };
  if (table.orderBy) fields[table.orderBy] = table.order;
  const order = Object.keys(fields).map((x) => `${x}:${fields[x]}`);
  return order.join(',') || undefined;
}
