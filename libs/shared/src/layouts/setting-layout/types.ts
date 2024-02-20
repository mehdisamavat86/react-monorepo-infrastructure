import { DashboardLayoutOptions } from '@myapp/shared/layouts/dashboard/types';
import { PropsWithChildren } from 'react';

export interface SettingLayoutProps extends PropsWithChildren {
  options?: DashboardLayoutOptions;
}
