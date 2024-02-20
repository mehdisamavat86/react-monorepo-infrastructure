import { useBaseQuery } from '@myapp/shared/http/hooks';
import {
  NotificationCountResponse,
  NotificationMessageChannel,
  NotificationMessageGroup,
  NotificationStatus,
} from '../types';
import { NOTIFICATION_API_PREFIX } from './constants';

export function useBrowseNotificationsCountApi() {
  const params = {
    return: 'count',
    groups: `${NotificationMessageGroup.EVENT},${NotificationMessageGroup.UPDATE}`,
    channels: NotificationMessageChannel.NOTIFICATION,
    statuses: NotificationStatus.SENT,
  };
  return useBaseQuery<typeof params, NotificationCountResponse[]>(
    [useBrowseNotificationsCountApi.name],
    {
      url: NOTIFICATION_API_PREFIX,
      params,
    }
  );
}
