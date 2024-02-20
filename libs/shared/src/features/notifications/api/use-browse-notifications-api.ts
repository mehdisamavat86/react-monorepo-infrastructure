import {
  ErrorResponse,
  PaginationRequest,
  PaginationResponse,
} from '@myapp/shared/definition';
import { useBaseQuery } from '@myapp/shared/http/hooks';
import { UseQueryOptions } from '@tanstack/react-query';
import { NotificationItem, NotificationStatus } from '../types';
import { NOTIFICATION_API_PREFIX } from './constants';

export function useBrowseNotificationsApi(
  params: PaginationRequest & { statuses: NotificationStatus },
  options?: UseQueryOptions<PaginationResponse<NotificationItem>, ErrorResponse>
) {
  const { page, ...other } = params;

  return useBaseQuery<typeof params, PaginationResponse<NotificationItem>>(
    [useBrowseNotificationsApi.name, page, other],
    {
      url: NOTIFICATION_API_PREFIX,
      params,
    },
    options
  );
}
