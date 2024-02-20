import { useCallback, useState } from 'react';
import { TableProps } from './types';
import { useTableSelection } from './use-table-selection';

type ReturnType = TableProps;

export type UseTableProps = {
  defaultDense?: boolean;
  defaultOrder?: 'asc' | 'desc';
  defaultOrderBy?: string;
  defaultRowsPerPage?: number;
  defaultCurrentPage?: number;
  onPageReset?: () => void;
};

export default function useTable(props?: UseTableProps): ReturnType {
  const selection = useTableSelection();

  const [dense, setDense] = useState(!!props?.defaultDense);

  const [page, setPage] = useState(props?.defaultCurrentPage || 0);

  const [orderBy, setOrderBy] = useState(props?.defaultOrderBy);

  const [rowsPerPage, setRowsPerPage] = useState(
    props?.defaultRowsPerPage || 5
  );

  const [order, setOrder] = useState<'asc' | 'desc'>(
    props?.defaultOrder || 'asc'
  );

  const onSort = (id: string) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const onChangeDense = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDense(event.target.checked);

  const onChangePage = (event: unknown, newPage: number) => setPage(newPage);

  const onResetPage = () => {
    setPage(0);
    selection.onClear();
    props?.onPageReset?.();
  };

  const onUpdatePageDeleteRow = useCallback(
    (totalRowsInPage: number) => {
      selection.setExcluded([]);
      if (page && totalRowsInPage < 2) setPage(page - 1);
    },
    [page, selection]
  );

  const onUpdatePageDeleteRows = useCallback(
    ({
      totalRows,
      totalRowsInPage,
      totalRowsFiltered,
    }: {
      totalRows: number;
      totalRowsInPage: number;
      totalRowsFiltered: number;
    }) => {
      const totalSelected = selection.size;

      if (page) {
        if (totalSelected === totalRowsInPage) {
          setPage(page - 1);
        } else if (totalSelected === totalRowsFiltered) {
          setPage(0);
        } else if (totalSelected > totalRowsInPage) {
          const newPage =
            Math.ceil((totalRows - totalSelected) / rowsPerPage) - 1;
          setPage(newPage);
        }
      }
    },
    [page, rowsPerPage, selection.size]
  );

  return {
    dense,
    order,
    page,
    orderBy,
    rowsPerPage,
    //
    selection,
    //
    onSort,
    onChangePage,
    onChangeDense,
    onResetPage,
    onChangeRowsPerPage,
    onUpdatePageDeleteRow,
    onUpdatePageDeleteRows,
    //
    setPage,
    setDense,
    setOrder,
    setOrderBy,
    setRowsPerPage,
  };
}
