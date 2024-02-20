import {
  TableColumn,
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
} from '@myapp/shared/components';
import TableSkeletonList from '@myapp/shared/components/table/table-skeleton-list';
import { useQueryStringState } from '@myapp/shared/hooks';
import { classnames, toNumber } from '@myapp/shared/utils';
import { Box, TableBody } from '@mui/material';
import { get } from 'lodash-es';
import { memo, useEffect, useRef } from 'react';
import { useAdvanceTableContext } from '../../context';
import { AdvanceTableColumnModifier } from '../advance-table-column-modifier';
import { TableRow } from '../table-row';
import { TableStickyRow } from '../table-sticky-row';
import { TableStickyRowsDivider } from '../table-sticky-rows-divider';
import { useApplyTableFiltersToQueryParams } from './hooks/use-apply-table-filters-to-query-params';
import { useFilterChangeListener } from './hooks/use-filter-change-listener';
import { useGetBrowseApiData } from './hooks/use-get-browse-api-data';
import * as Styled from './styles';
import type { TableProps as Props } from './types';

export const Table = memo(({ className }: Props) => {
  const { params, setParams, setParam } = useQueryStringState();
  const { config, filters, table } = useAdvanceTableContext();
  const rowKey = config.rowKey || 'id';
  const hidePagination = !!config.hidePagination;
  const checkboxEnabled = config.manualSelectionLimit
    ? table.selection.added.length < config.manualSelectionLimit
    : true;
  const { data, isLoading } = useGetBrowseApiData(table);
  const notFound = !isLoading && !data?.content?.length;
  const columnModifier = config?.columnModifierKey && (
    <AdvanceTableColumnModifier />
  );
  const ref = useRef<any>();

  useEffect(() => {
    ref.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [data]);
  const columns = config?.columns.filter((x) => !x.hide);

  useApplyTableFiltersToQueryParams(table);

  useFilterChangeListener(table);

  useEffect(() => {
    if (!config.applyStateToQueryParams) return;
    setParams({
      ...filters,
      page: params.page ?? 0,
      size: params.size ?? table.rowsPerPage,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.applyStateToQueryParams, filters]);

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
    const ids: string[] = data?.top?.map((x) => get(x, rowKey)) || [];
    table.selection.appendInitialIds(ids);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {(columnModifier || config.renderTablePrepend) &&
        (notFound ? config.showTablePrependOnNotFound : true) && (
          <Box>
            {config.renderTablePrepend
              ? config.renderTablePrepend(columnModifier, {
                  data,
                  table,
                  filters,
                })
              : columnModifier}
          </Box>
        )}

      <Styled.Wrapper
        className={classnames('Table', className, {
          bordered: !notFound && config.bordered !== false,
          notFound,
          hideHeader: config.hideColumnsOnNoData,
          isError: !Array.isArray(data?.content),
        })}
        data-border-style={config.bordered}
      >
        <Styled.ScrollWrapper
          ref={ref}
          sx={{
            '& > div > .simplebar-wrapper': {
              height:
                !notFound && config.maxHeight ? config.maxHeight : 'initial',
            },
          }}
        >
          <Styled.Table
            className={classnames({
              loading: isLoading,
              empty: !isLoading && !data?.content?.length,
            })}
            stickyHeader={config.stickyHeader}
          >
            {(config.hideColumnsOnNoData ? !notFound : true) && (
              <TableHeadCustom
                order={table.order}
                orderBy={table.orderBy}
                headLabel={columns as TableColumn[]}
                cellSx={config.cellSx}
                onSort={table.onSort}
                canSelectAllRows={
                  !config.rowSelectable || config.showSelectAll
                    ? config.rowSelectable
                    : false
                }
              />
            )}

            <TableBody>
              {isLoading && (
                <TableSkeletonList
                  count={table.rowsPerPage}
                  cols={columns.length}
                />
              )}

              {data?.top?.map((item, index) => {
                const key = get(item, rowKey);
                return (
                  <TableStickyRow
                    className={classnames('sticky')}
                    key={key}
                    data-key={key}
                    item={item}
                    index={index}
                    columns={columns}
                    config={config}
                    selected={table.selection.isRowSelected(index, key)}
                    checkboxEnabled={checkboxEnabled}
                    onSelect={table.selection.onSelectTopRow}
                    onRowClick={() => config.onClickRow?.(item, key)}
                  />
                );
              })}

              {!!data?.top?.length && (
                <TableStickyRowsDivider
                  current={data?.top?.length}
                  max={config.maxStickyRows}
                />
              )}

              {data?.content?.map((item, i) => {
                const key = get(item, rowKey);
                const index = table.page * table.rowsPerPage + i;
                return (
                  <TableRow
                    key={key}
                    data-key={key}
                    item={item}
                    index={index}
                    columns={columns}
                    config={config}
                    selected={table.selection.isRowSelected(index, key)}
                    checkboxEnabled={checkboxEnabled}
                    onSelect={table.selection.onSelectRow}
                    onRowClick={() => config.onClickRow?.(item, key)}
                  />
                );
              })}

              {notFound && (
                <TableNoData
                  config={config.emptyProps}
                  isError={!Array.isArray(data?.content)}
                />
              )}
            </TableBody>
          </Styled.Table>
        </Styled.ScrollWrapper>

        {!notFound && !hidePagination && (
          <TablePaginationCustom
            isLoading={isLoading}
            config={config}
            count={data?.totalElements || 0}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
          />
        )}
      </Styled.Wrapper>
    </>
  );
});

Table.displayName = 'Table';
