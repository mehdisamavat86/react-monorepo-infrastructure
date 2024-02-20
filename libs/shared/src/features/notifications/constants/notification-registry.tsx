import { NotificationItemAccount } from '../components/notification-item-account';
import { NotificationItemCrawlRequest } from '../components/notification-item-crawl-request';
import { NotificationItemExport } from '../components/notification-item-export';
import { NotificationItemSubscription } from '../components/notification-item-subscription';
import { NotificationItemUpdate } from '../components/notification-item-update';
import { NotificationType } from '../types';

export const NOTIFICATION_REGISTRY = new Map<Partial<NotificationType>, any>([
  [NotificationType.Account, NotificationItemAccount],
  [NotificationType.CrawlRequest, NotificationItemCrawlRequest],
  [NotificationType.Export, NotificationItemExport],
  [NotificationType.Subscription, NotificationItemSubscription],
  [NotificationType.Update, NotificationItemUpdate],
]);
