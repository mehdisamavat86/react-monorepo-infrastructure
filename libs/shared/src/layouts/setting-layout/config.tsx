import { GlobalNotificationBar } from '@myapp/shared/features';
import { DashboardLayoutOptions } from '@myapp/shared/layouts/dashboard/types';

export const options = {
  topElement: <GlobalNotificationBar />,
  navigation: {
    config: {
      itemGap: 12,
      sx: {
        pb: 2,
      },
    },
  },
} satisfies DashboardLayoutOptions;
