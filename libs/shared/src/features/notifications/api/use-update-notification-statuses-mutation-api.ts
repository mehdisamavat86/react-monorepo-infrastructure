import { HttpMethod } from '@myapp/shared/definition';
import { baseQueryClient } from '@myapp/shared/http/base-query-client';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { NotificationMessageChannel, NotificationMessageGroup } from '../types';
import { NOTIFICATION_API_PREFIX } from './constants';
import { useBrowseNotificationsCountApi } from './use-browse-notifications-count-api';

type UpdateNotificationStatusesRequest = {
  groups: NotificationMessageGroup[];
  channels: NotificationMessageChannel[];
};

export function useUpdateNotificationStatusesMutationApi() {
  return useBaseMutation<UpdateNotificationStatusesRequest, any>(
    {
      url: NOTIFICATION_API_PREFIX,
      method: HttpMethod.put,
      params: {
        action: 'delivered-all',
      },
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
