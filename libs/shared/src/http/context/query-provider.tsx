import { createContext, useContext, useMemo, useState } from 'react';
import {
  QueryContextData as ContextData,
  QueryContextProps as ContextProps,
  QueryParamsValue,
} from './types';

const QueryContext = createContext<ContextData>({} as ContextData);

export const { Provider } = QueryContext;

export const useQueryContext = () => {
  const context = useContext(QueryContext);
  if (!context)
    throw new Error('useQueryContext must be use inside QueryProvider');
  return context;
};

export const QueryProvider = ({ children, value }: ContextProps) => {
  const [totalElements, setTotalElements] = useState<number>();
  const [params, setParams] = useState<Record<string, QueryParamsValue>>();
  const [previousParams, setPreviousParams] =
    useState<Record<string, QueryParamsValue>>();

  const memoizedValue = useMemo(
    () => ({
      previousParams,
      setPreviousParams,
      params,
      setParams,
      totalElements,
      setTotalElements,
    }),
    [totalElements, params, previousParams]
  );

  return <Provider value={memoizedValue}> {children}</Provider>;
};
