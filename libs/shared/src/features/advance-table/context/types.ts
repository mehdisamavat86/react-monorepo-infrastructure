import { TableProps } from '@myapp/shared/components';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import type { AdvanceTableConfig, AdvanceTableFilterParams } from '../types';

export interface AdvanceTableContextContextData
  extends AdvanceTableFilterParams {
  config: AdvanceTableConfig;
  table: TableProps;
  setConfig: (config: AdvanceTableConfig) => void;
  clearFilters: () => void;
  maxStickyRows?: number;
  stickyCollapsed: boolean;
  setStickyCollapsed: Dispatch<SetStateAction<boolean>>;
}

export interface AdvanceTableContextContextProps extends PropsWithChildren {
  config: AdvanceTableContextContextData['config'];
}
