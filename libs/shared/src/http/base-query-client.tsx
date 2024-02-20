import {
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';
import { PaginationResponse } from '../definition';
import { DURATION_MS } from '../utils/duration';

export const baseQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: DURATION_MS.minutes(1),
      staleTime: DURATION_MS.minutes(1),
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
});

export const ReactQueryProvider = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={baseQueryClient}>
    {children}

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export const baseQueryClientGetData: typeof baseQueryClient.getQueryData = (
  queryKey,
  filters
) => {
  try {
    return baseQueryClient.getQueryData(queryKey, filters);
  } catch {
    return undefined;
  }
};

export const baseQueryClientGetAllData: typeof baseQueryClient.getQueriesData =
  (queryKey) => {
    try {
      return baseQueryClient.getQueriesData(queryKey as any);
    } catch {
      return [];
    }
  };

export function baseQueryClientUpdatePaginatedQueries<
  T extends { id: string } = any
>(key: QueryKey, data: T, removeIt = false) {
  const queries = baseQueryClient.getQueriesData(key) as [
    QueryKey,
    PaginationResponse<any>
  ][];

  queries.forEach(([qKey, qData]) => {
    if ('content' in qData) {
      const foundIndex = qData.content.findIndex((x) => x.id === data.id);
      if (foundIndex > -1) {
        if (removeIt) {
          qData.content.splice(foundIndex, 1);
          qData.totalElements -= 1;
          qData.numberOfElements -= 1;
        } else qData.content[foundIndex] = data;
        baseQueryClient.setQueryData(qKey, qData);
      }
    }
  });
}
