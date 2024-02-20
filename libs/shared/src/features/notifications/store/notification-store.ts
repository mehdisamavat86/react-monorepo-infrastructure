import { createStore } from '@myapp/shared/store';
import type { Draft } from 'immer';
import {
  NotificationItem,
  NotificationMessageGroup,
  NotificationStatus,
} from '../types';
import { NotificationStoreData as StoreData } from './types';

const useNotificationStore = createStore<StoreData>('notification', (set) => ({
  notifications: [],
  setNotifications: (notifications) => set({ notifications }),
  clearNotifications: (group) =>
    set(({ notifications }) => ({
      notifications: notifications.filter((n) => n.message.group !== group),
    })),
  addNotification: (item) =>
    set(({ notifications }) =>
      notifications.unshift(item as Draft<NotificationItem>)
    ),
  markNotificationAsRead: (item) =>
    set(({ notifications }) => {
      const found = notifications.find((x) => x.id === item.id);
      if (found) found.status = NotificationStatus.DELIVERED;
    }),
  notificationTab: NotificationMessageGroup.EVENT,
  setNotificationTab: (notificationTab) => set({ notificationTab }),
}));

export default useNotificationStore;
