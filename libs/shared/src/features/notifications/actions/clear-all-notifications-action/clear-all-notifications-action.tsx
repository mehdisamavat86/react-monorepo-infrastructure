import { classnames } from '@myapp/shared/utils';
import { Button } from '@mui/material';
import { memo } from 'react';
import { useUpdateNotificationStatusesMutationApi } from '../../api/use-update-notification-statuses-mutation-api';
import { useNotificationStore } from '../../store';
import { NotificationMessageChannel } from '../../types';
import * as Styled from './styles';
import * as SX from './sx';
import type { ClearAllNotificationsActionProps as Props } from './types';

export const ClearAllNotificationsAction = memo(
  ({ className, isLoading = false }: Props) => {
    const clearNotifications = useNotificationStore.useClearNotifications();
    const notificationTab = useNotificationStore.useNotificationTab();
    const api = useUpdateNotificationStatusesMutationApi();

    const handleClearNotifications = () => {
      api
        .mutateAsync({
          groups: [notificationTab],
          channels: [NotificationMessageChannel.NOTIFICATION],
        })
        .then((res) => {
          clearNotifications(notificationTab);
        });
    };

    return (
      <Styled.Wrapper
        className={classnames('ClearAllNotificationsAction', className)}
        sx={SX.root}
      >
        <Button
          onClick={handleClearNotifications}
          sx={SX.clearActionSx}
          variant="text"
          disabled={isLoading}
        >
          Clear Notification
        </Button>
      </Styled.Wrapper>
    );
  }
);

ClearAllNotificationsAction.displayName = 'ClearAllNotificationsAction';
