import type { TableProps } from '@myapp/shared/components/table';
import { useDebounce } from '@myapp/shared/hooks';
import { useAdvanceTableContext } from '../../../context';
import { calculateTableSort, toBrowseApiData } from '../utils';

export function useGetBrowseApiData(table: TableProps) {
  const { config, filters } = useAdvanceTableContext();
  const debouncedFilters = useDebounce(filters, 1000);

  const { data, isLoading } =
    typeof config.browseApi === 'function'
      ? config.browseApi({
          sort: calculateTableSort(table, config.prependSortingFields),
          ...debouncedFilters,
          ...config.extraFilters,
          page: table.page,
          size: table.rowsPerPage,
        })
      : toBrowseApiData(config.browseApi, table);

  return { data, isLoading };
}
