import type {
  EmptyContentProps,
  SortableListItem,
  TableColumn,
  TableProps,
  WithTableNoDataProps,
} from '@myapp/shared/components';
import type {
  ErrorResponse,
  PaginationRequest,
  PaginationResponse,
  ParsedPreset,
  ReactElement,
} from '@myapp/shared/definition';
import type { SxStyle } from '@myapp/shared/theme';
import { SortDirection } from '@mui/material';
import type { UseQueryResult } from '@tanstack/react-query';
import type { CSSProperties, ReactNode } from 'react';
import type { AdvanceTableContextContextData } from './context';

export interface AdvanceTableProps {
  className?: string;
  config: AdvanceTableConfig;
  extraFilters?: AdvanceTableConfig['extraFilters'];
  beforeEl?: ReactNode;
  afterEl?: ReactNode;
}

export type AdvanceTableFilterValue =
  | string
  | number
  | boolean
  | null
  | undefined;
export type AdvanceTableFilters = Record<string, AdvanceTableFilterValue>;

export interface AdvanceTableColumnExtraOptions {
  hide?: boolean;
  order?: number;
}

export interface AdvanceTableColumn<T = any>
  extends TableColumn<T>,
    AdvanceTableColumnExtraOptions {
  render?: (value: any, data: T, index: number) => any;
  showInColumnModifier?: boolean;
}

export type AdvanceTableActionProps<T = never> = Record<string, any> & {
  item: T;
  rowNumber: number;
};

export type AdvanceTableActionConfig<T = any, P = any> = (
  props: Record<string, any> & { item: T; rowNumber: number } & P
) => any;

export type AdvanceTableFilterParams<
  T = AdvanceTableFilters,
  P = Record<string, any>
> = {
  filters: Partial<T> & Partial<P>;
  setFilter: (key: keyof T, value?: AdvanceTableFilterValue) => void;
};

export type AdvanceTableFilterConfig = (
  props: Record<string, any> & AdvanceTableFilterParams
) => any;

export type BrowseApi<D> = (
  params: PaginationRequest<D>
) => UseQueryResult<PaginationResponse, ErrorResponse>;

export type BrowseData<T> = {
  data?: T[];
  isLoading?: boolean;
};

export type AdvanceTableActionFilter = Record<
  string,
  string | boolean | number
>;

export interface AdvanceTableConfig<T = any, D = any> {
  rowKey?: string;
  rowSelectable?: boolean;
  showSelectAll?: boolean;
  columns: AdvanceTableColumn<T>[];
  actions: AdvanceTableActionConfig[];
  actionsConfig?: Omit<
    AdvanceTableColumn,
    'id' | 'key' | 'sortable' | 'render'
  > & { sx?: SxStyle };
  filters?: AdvanceTableFilterConfig[];
  initialFilters?: AdvanceTableActionFilter | (() => AdvanceTableActionFilter);
  extraFilters?: AdvanceTableActionFilter;
  hideResetFilters?: boolean;
  filtersSx?: SxStyle & { itemsSx?: SxStyle };
  browseApi: BrowseApi<D> | BrowseData<T>;
  styles?: {
    roundedHeader?: boolean;
  };
  emptyProps?: ReactElement<WithTableNoDataProps> | EmptyContentProps;
  hideColumnsOnNoData?: boolean;
  showTablePrependOnNotFound?: boolean;
  renderTablePrepend?: (
    slot: ReactNode,
    params: {
      data?: PaginationResponse<T>;
      table: TableProps;
      filters: AdvanceTableContextContextData['filters'];
    }
  ) => ReactNode;
  cellSx?: SxStyle;
  sx?: SxStyle;
  hidePagination?: boolean;
  columnModifierKey?: string;
  applyStateToQueryParams?: boolean;
  bordered?: CSSProperties['borderStyle'] | boolean;
  showPageSelector?: boolean;
  showRowsPerPage?: boolean;
  stickyHeader?: boolean;
  pageSelectorMax?: number;
  rowsPerPageOptions?: number[];
  maxStickyRows?: number;
  maxHeight?: number | string;
  manualSelectionLimit?: number;
  includeStickyRowsInSelection?: boolean;
  prependSortingFields?: Record<keyof T | keyof D | string, SortDirection>;
  onClickRow?: (item: T, key: string) => void;
  onPageReset?: (params: { config: AdvanceTableConfig<T, D> }) => void;
}

export type AdvanceTaColumnModifierPreset = ParsedPreset<SortableListItem[]>;
