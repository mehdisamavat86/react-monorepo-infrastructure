import { NotificationItem, NotificationMessageGroup } from '../types';

export interface NotificationStoreData {
  notifications: NotificationItem[];
  notificationTab: NotificationMessageGroup;
  setNotificationTab: (tab: NotificationMessageGroup) => void;
  clearNotifications: (group: NotificationMessageGroup) => void;
  setNotifications: (notifications: NotificationItem[]) => void;
  addNotification: (notification: NotificationItem) => void;
  markNotificationAsRead: (notification: NotificationItem) => void;
}
