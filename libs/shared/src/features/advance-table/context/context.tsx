import { useTable } from '@myapp/shared/components';
import { useQueryContext } from '@myapp/shared/http';
import { createContext, useContext, useEffect, useState } from 'react';
import { appendActionColumnToConfig } from '../utils';
import type {
  AdvanceTableContextContextData as ContextData,
  AdvanceTableContextContextProps as ContextProps,
} from './types';

const context = createContext<ContextData>({} as ContextData);

export const { Provider } = context;

export const useAdvanceTableContext = () => useContext(context);

export const AdvanceTableContextProvider = ({
  children,
  config: conf,
}: ContextProps) => {
  const { params } = useQueryContext();
  conf.rowsPerPageOptions = conf.rowsPerPageOptions || [5, 10, 20, 25];
  const [config, setConfig] = useState(() => appendActionColumnToConfig(conf));
  const table = useTable({ defaultRowsPerPage: conf.rowsPerPageOptions[0] });
  config.rowsPerPageOptions = config.rowsPerPageOptions || [5, 10, 20, 25];
  const [filters, setFilters] = useState<ContextData['filters']>(() => ({
    ...(typeof conf?.initialFilters === 'function'
      ? conf.initialFilters()
      : conf?.initialFilters),
    ...params,
  }));

  const setFilter: ContextData['setFilter'] = (key, value) =>
    setFilters((old) => ({ ...old, [key]: value }));
  const clearFilters: ContextData['clearFilters'] = () => setFilters({});

  const [stickyCollapsed, setStickyCollapsed] = useState<boolean>(false);

  useEffect(() => setConfig(conf), [conf]);

  return (
    <Provider
      value={{
        config,
        setConfig: (x) => setConfig(x),
        filters,
        setFilter,
        table,
        clearFilters,
        stickyCollapsed,
        setStickyCollapsed,
        maxStickyRows: conf.maxStickyRows,
      }}
    >
      {children}
    </Provider>
  );
};
