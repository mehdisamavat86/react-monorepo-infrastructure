import { PaginationResponse } from '@myapp/shared/definition';
import { AdvanceTableContextContextData } from '@myapp/shared/features/advance-table/context';
import type { TableCellProps } from '@mui/material';
import { ReactNode } from 'react';

export type TableProps = {
  dense: boolean;
  page: number;
  rowsPerPage: number;
  order: 'asc' | 'desc';
  orderBy?: string;
  //
  selection: TableSelectionProps;
  //
  onResetPage: VoidFunction;
  onSort: (id: string) => void;
  onChangePage: (event: unknown, newPage: number) => void;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdatePageDeleteRow: (totalRowsInPage: number) => void;
  onUpdatePageDeleteRows: ({
    totalRows,
    totalRowsInPage,
    totalRowsFiltered,
  }: {
    totalRows: number;
    totalRowsInPage: number;
    totalRowsFiltered: number;
  }) => void;
  //
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setDense: React.Dispatch<React.SetStateAction<boolean>>;
  setOrder: React.Dispatch<React.SetStateAction<'desc' | 'asc'>>;
  setOrderBy: React.Dispatch<React.SetStateAction<string | undefined>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
};

export type LabelRender<T> = (
  slot: ReactNode,
  params: {
    data?: PaginationResponse<T>;
    table: TableProps;
    filters: AdvanceTableContextContextData['filters'];
  }
) => ReactNode;

export type TableColumn<T = Record<string, any>> = {
  key?: string;
  id: keyof T;
  align?: TableCellProps['align'];
  width?: number;
  minWidth?: number;
  label?: ReactNode;
  // label?: ReactNode | LabelRender<T>;
  sortable?: true | string;
  hide?: boolean;
  order?: number;
  boxShadow?: string;
};

export type TableSelectionProps = {
  size: number;
  count: number;
  added: string[];
  setAdded: React.Dispatch<React.SetStateAction<string[]>>;
  included: string[];
  appendInitialIds: (ids: string[]) => void;
  setIncluded: React.Dispatch<React.SetStateAction<string[]>>;
  excluded: string[];
  setExcluded: React.Dispatch<React.SetStateAction<string[]>>;
  isRowSelected: (index: number, id: string) => boolean;
  isTopRowSelected: (id: string) => boolean;
  onSelectRow: (index: number, id: string, checked: boolean) => void;
  onSelectTopRow: (id: string) => void;
  onSelectRowsBySize: (size: number) => void;
  onSelectRowsById: (ids?: string[]) => void;
  onClear: () => void;
};
