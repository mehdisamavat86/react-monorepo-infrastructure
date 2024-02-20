import { CustomPopover, ReloadButton } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { Badge } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useBrowseNotificationsApi } from './api/use-browse-notifications-api';
import { useBrowseNotificationsCountApi } from './api/use-browse-notifications-count-api';
import { NotificationTabs } from './components/notification-tabs';
import { useSocketNotification } from './socket/use-socket-notification';
import { useNotificationStore } from './store';
import * as Styled from './styles';
import * as SX from './sx';
import {
  NotificationCountResponse,
  NotificationStatus,
  NotificationsProps as Props,
  onReceiveSocketNotificationEvent,
} from './types';

export const Notifications = ({ className, actions }: Props) => {
  const theme = useTheme();

  const setNotifications = useNotificationStore.useSetNotifications();
  const api = useBrowseNotificationsApi(
    { page: 0, size: 25, statuses: NotificationStatus.SENT },
    {
      onSuccess(data) {
        setNotifications(data.content);
      },
    }
  );
  const count = useBrowseNotificationsCountApi();

  const onEvent: onReceiveSocketNotificationEvent = (
    data: NotificationCountResponse
  ) => {
    if (data.count !== count.data?.at(0)?.count) {
      api.refetch();
      count.refetch();
    }
  };

  useSocketNotification(onEvent);

  const iconEl = (
    <Styled.Icon size={20} color={theme.palette.primary[200]} name="bell" />
  );

  return (
    <Styled.Wrapper
      className={classnames('Notifications', className)}
      sx={SX.root}
    >
      <CustomPopover
        element={
          count.data ? (
            <Badge
              badgeContent={count?.data?.reduce(
                (prev, current) => prev + current.count,
                0
              )}
              color="primary"
              children={iconEl}
            />
          ) : (
            iconEl
          )
        }
        title="Notifications"
        titleSx={SX.popoverTitleSx}
        sx={SX.popoverSx}
        contentSx={SX.contentSx}
      >
        {api.data && <NotificationTabs />}
        {api.error && <ReloadButton onReload={api.refetch} />}
        {!api.error && actions?.map((action) => action)}
      </CustomPopover>
    </Styled.Wrapper>
  );
};

Notifications.displayName = 'Notifications';
