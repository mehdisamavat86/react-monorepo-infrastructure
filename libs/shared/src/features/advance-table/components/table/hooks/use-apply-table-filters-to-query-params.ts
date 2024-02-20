import type { TableProps } from '@myapp/shared/components/table';
import { useQueryStringState } from '@myapp/shared/hooks';
import { toNumber } from '@myapp/shared/utils';
import { useEffect } from 'react';
import { useAdvanceTableContext } from '../../../context';

export function useApplyTableFiltersToQueryParams(table: TableProps) {
  const { config, filters } = useAdvanceTableContext();
  const { params, setParam, setParams } = useQueryStringState();

  useEffect(() => {
    if (toNumber(params.page) !== table.page)
      setParam('page', table.page.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.page]);

  useEffect(() => {
    if (toNumber(params.size) !== table.rowsPerPage)
      setParam('size', table.rowsPerPage.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.rowsPerPage]);

  useEffect(() => {
    if (!config.applyStateToQueryParams) return;
    setParams({
      ...filters,
      page: params.page ?? 0,
      size: params.size ?? table.rowsPerPage,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.applyStateToQueryParams, filters]);
}
