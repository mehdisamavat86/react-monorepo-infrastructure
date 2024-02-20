import { classnames } from '@myapp/shared/utils';
import { TabContext } from '@mui/lab';
import { Box } from '@mui/material';
import { memo } from 'react';
import { useGetNotificationTabItems } from '../../hooks/use-get-notification-tab-items';
import { useNotificationStore } from '../../store';
import { NotificationMessageGroup } from '../../types';
import { NotificationPanel } from './notification-panel';
import { NotificationTab } from './notification-tab';
import * as Styled from './styles';
import * as SX from './sx';
import { type NotificationTabsProps as Props } from './types';

export const NotificationTabs = memo(({ className }: Props) => {
  const notifications = useNotificationStore.useNotifications();
  const notificationTab = useNotificationStore.useNotificationTab();
  const setNotificationTab = useNotificationStore.useSetNotificationTab();

  const { events, updates } = useGetNotificationTabItems(notifications);

  return (
    <TabContext value={notificationTab}>
      <Styled.Wrapper
        className={classnames('NotificationTabs', className)}
        sx={SX.root}
        value={notificationTab}
        onChange={(_, v) => setNotificationTab(v)}
      >
        <NotificationTab
          value={NotificationMessageGroup.EVENT}
          items={events}
        />
        <NotificationTab
          value={NotificationMessageGroup.UPDATE}
          items={updates}
        />
      </Styled.Wrapper>

      <Box
        sx={SX.tabContent}
        className={classnames('NotificationTabs-Content', className)}
      >
        <NotificationPanel
          value={NotificationMessageGroup.EVENT}
          items={events}
        />
        <NotificationPanel
          value={NotificationMessageGroup.UPDATE}
          items={updates}
        />
      </Box>
    </TabContext>
  );
});

NotificationTabs.displayName = 'NotificationTabs';
