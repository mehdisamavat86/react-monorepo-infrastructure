import { HttpStatusCode } from 'axios';
import type { ErrorResponse, PaginationResponse } from '../definition';
import { toNumber } from '../utils';

export function createPaginationResponse<T = any>(
  data?: Partial<PaginationResponse>
): PaginationResponse<T> {
  const content = data?.content ?? [];
  return {
    content,
    empty: data?.empty ?? false,
    first: data?.first ?? true,
    last: data?.last ?? true,
    number: data?.number ?? content.length,
    numberOfElements: data?.numberOfElements ?? content.length,
    size: data?.size ?? content.length,
    totalElements: data?.totalElements ?? content.length,
    totalPages: data?.totalPages ?? 1,
    sort: data?.sort ?? {
      empty: true,
      sorted: true,
      unsorted: false,
    },
  };
}

export function toErrorResponse(error?: any): ErrorResponse {
  if (typeof error?.error === 'object') error = { ...error, ...error.error };
  const code = error?.code || error.status || error.statusCode || 0;
  const message =
    error?.data?.message ||
    error?.data?.error ||
    error?.error ||
    error?.message ||
    error.statusMessage ||
    'Unknown';

  return {
    message,
    cause: {
      code,
      subCode: error?.data?.status || error?.data?.code || code,
      message,
    },
  };
}

export function toCustomHttpCode(
  status: keyof typeof HttpStatusCode,
  code: number
): number {
  return toNumber(`${HttpStatusCode[status]}${code}`) || code;
}
