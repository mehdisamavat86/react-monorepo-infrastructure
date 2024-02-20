import { useSocketEvent } from '@myapp/shared/socket';
import {
  NotificationCountResponse,
  onReceiveSocketNotificationEvent,
} from '../types';

export function useSocketNotification(
  onEvent: onReceiveSocketNotificationEvent
) {
  useSocketEvent(
    `/message-management/um/users/{user}/notifications?return=count`,
    (data: NotificationCountResponse) => {
      onEvent(data);
    }
  );
}
