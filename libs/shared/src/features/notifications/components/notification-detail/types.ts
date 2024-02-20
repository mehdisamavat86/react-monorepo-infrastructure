import { SxStyle } from '@myapp/shared/theme';
import { PropsWithChildren } from 'react';
import { NotificationItem } from '../../types';

export interface NotificationDetailProps extends PropsWithChildren {
  className?: string;
  sx?: SxStyle;
  item: NotificationItem;
  onClick?: VoidFunction;
}
