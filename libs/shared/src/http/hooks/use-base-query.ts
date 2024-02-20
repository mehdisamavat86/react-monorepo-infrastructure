import { ErrorResponse } from '@myapp/shared/definition';
import { useDebounce } from '@myapp/shared/hooks';
import { DURATION_MS as MS } from '@myapp/shared/utils';
import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import baseFetcher from '../fetcher/base-fetcher';
import { toErrorResponse } from '../utils';

export function useBaseQuery<Req = unknown, Res = unknown, SelectedRes = Res>(
  key: QueryKey,
  config: AxiosRequestConfig<Req>,
  options?: UseQueryOptions<Res, ErrorResponse, SelectedRes> & {
    delay?: number;
  }
) {
  const enabled = useDebounce(true, MS.seconds(options?.delay ?? 0), false);

  return useQuery<Res, ErrorResponse, SelectedRes>(
    key,
    () => baseFetcher({ ...config }),
    {
      enabled, // TODO this must be listed after ...options
      ...options,
      onError: toErrorResponse,
    }
  );
}
