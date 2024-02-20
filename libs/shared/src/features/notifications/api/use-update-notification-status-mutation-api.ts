import { HttpMethod, PaginationResponse } from '@myapp/shared/definition';
import { baseQueryClient } from '@myapp/shared/http/base-query-client';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { NotificationItem } from '../types';
import { NOTIFICATION_API_PREFIX } from './constants';
import { useBrowseNotificationsCountApi } from './use-browse-notifications-count-api';

export function useUpdateNotificationStatusMutationApi(id: string) {
  return useBaseMutation<any, PaginationResponse<NotificationItem>>(
    {
      url: `${NOTIFICATION_API_PREFIX}/${id}/delivered`,
      method: HttpMethod.put,
    },
    {
      onSettled(data) {
        baseQueryClient.invalidateQueries([
          useBrowseNotificationsCountApi.name,
        ]);
      },
    }
  );
}
