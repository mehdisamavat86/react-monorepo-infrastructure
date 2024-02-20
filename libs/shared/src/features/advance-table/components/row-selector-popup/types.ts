import { TableProps } from '@myapp/shared/components';
import { PaginationResponse } from '@myapp/shared/definition';

export interface RowSelectorPopupProps<T> {
  className?: string;
  table?: TableProps;
  data?: PaginationResponse<T>;
}

export enum SelectionMode {
  PAGE = 'PAGE',
  ALL = 'ALL',
  NUMBER = 'NUMBER',
}

export interface ExportSizeLimit {
  systemLimitReached: boolean;
  normalRowsLimit: number;
  totalRowsLimit: number;
  systemLimit: number;
}
