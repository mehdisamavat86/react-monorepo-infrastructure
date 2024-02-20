import { NotificationItem } from '../../types';

export interface NotificationTabsProps {
  className?: string;
}

export interface NotificationTabProps {
  className?: string;
  value: string;
  items: NotificationItem[];
}

export type NotificationPanelProps = NotificationTabProps;

export enum NotificationTabKind {
  events = 'Events',
  updates = 'Updates',
}
