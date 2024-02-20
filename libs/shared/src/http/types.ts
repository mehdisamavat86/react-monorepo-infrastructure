import type {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { ErrorResponse } from '../definition';

export type QueryDelayOptions = {
  delay?: number;
};

export type QueryOptions<
  TQueryFnData = any,
  TError = any,
  TData = any,
  TQueryKey extends QueryKey = any
> = UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> & QueryDelayOptions;

export type MutationOptions<
  Res = any,
  Variables = any,
  Key = any
> = UseMutationOptions<Res, ErrorResponse, Variables, Key> & {
  doNotShowErrorNotification?: boolean;
};
