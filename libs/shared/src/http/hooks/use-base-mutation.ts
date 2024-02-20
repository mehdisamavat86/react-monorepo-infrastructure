import { ErrorResponse, HttpMethod } from '@myapp/shared/definition';
import { useNotify } from '@myapp/shared/hooks';
import { useMutation } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import baseFetcher from '../fetcher/base-fetcher';
import { MutationOptions } from '../types';
import { toErrorResponse } from '../utils';

export function useBaseMutation<
  Req = unknown,
  Res = never,
  Variables = Req,
  Key = any
>(
  config: AxiosRequestConfig<Req>,
  options?: Omit<MutationOptions<Res, Variables, Key>, 'mutationFn'>
) {
  const notify = useNotify();
  return useMutation<Res, ErrorResponse, Variables, Key>(async (data) => {
    try {
      const response = await baseFetcher({
        method: HttpMethod.post,
        ...config,
        data,
      });
      return response;
    } catch (error) {
      const err = toErrorResponse(error);
      if (!options?.doNotShowErrorNotification) notify.error(err.message);
      throw new Error(err.message, err);
    }
  }, options);
}
