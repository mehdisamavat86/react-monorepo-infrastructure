import { IconType } from '@myapp/shared/components';
import { UserRelation } from '@myapp/shared/definition';
import { ReactNode } from 'react';

export interface NotificationsProps {
  className?: string;
  actions?: ReactNode[];
}

export enum NotificationType {
  Export = 'Export',
  CrawlRequest = 'CrawlRequest',
  Account = 'Account',
  Subscription = 'Subscription',
  Update = 'Update',
}

export enum NotificationMessageGroup {
  EVENT = 'EVENT',
  UPDATE = 'UPDATE',
}

export enum NotificationStatus {
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
}

export enum NotificationMessageChannel {
  NOTIFICATION = 'NOTIFICATION',
}

export type NotificationMetadata = {
  download?: string;
  icon?: IconType;
  link?: string;
  name: string;
};

export type NotificationMessage = {
  id: string;
  requestId: string;
  body: string;
  channel: NotificationMessageChannel;
  group: NotificationMessageGroup;
  secret: boolean;
  metadata: NotificationMetadata;
  expireDate: string;
  created: string;
};

export interface NotificationItem {
  id: string;
  recipient: string;
  message: NotificationMessage;
  status: NotificationStatus;
  user: UserRelation;
}

export type NotificationCountResponse = {
  channel: NotificationMessageChannel;
  status: NotificationStatus;
  count: number;
  group: NotificationMessageGroup;
};

export type onReceiveSocketNotificationEvent = (
  data: NotificationCountResponse
) => void;
