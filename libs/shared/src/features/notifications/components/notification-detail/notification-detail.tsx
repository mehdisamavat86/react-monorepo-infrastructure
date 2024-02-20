import { Icon } from '@myapp/shared/components';
import { useRedirect } from '@myapp/shared/router';
import {
  classnames,
  fDateTimeName,
  trimCurrentHostname,
} from '@myapp/shared/utils';
import { Avatar } from '@mui/material';
import { merge } from 'lodash-es';
import { memo } from 'react';
import { useUpdateNotificationStatusMutationApi } from '../../api/use-update-notification-status-mutation-api';
import { useNotificationStore } from '../../store';
import * as Styled from './styles';
import * as SX from './sx';
import type { NotificationDetailProps as Props } from './types';
import { formatNotificationText } from './utils';

export const NotificationDetail = memo(
  ({ className, item, sx, children }: Props) => {
    const api = useUpdateNotificationStatusMutationApi(item.id);
    const redirect = useRedirect();
    const markAsRead = useNotificationStore.useMarkNotificationAsRead();

    const onClickHandler = () => {
      api.mutateAsync(null).then(() => {
        markAsRead(item);
        redirect(trimCurrentHostname(item.message.metadata.link));
      });
    };

    return (
      <Styled.Wrapper
        className={classnames('NotificationDetail', className)}
        sx={merge(SX.root, sx)}
        onClick={onClickHandler}
      >
        <Avatar
          sx={SX.avatar}
          src="no-icon"
          alt={item?.message.metadata?.icon?.toString()}
        >
          <Icon
            sxx={SX.avatar}
            name={item.message.metadata.icon || 'info'}
            size={20}
          />
        </Avatar>
        <Styled.Content sx={SX.content}>
          <Styled.Text
            dangerouslySetInnerHTML={{
              __html: formatNotificationText(
                item.message.body,
                item.message.metadata
              ),
            }}
          />
          <Styled.Date variant="caption">
            {fDateTimeName(item.message.created)}
          </Styled.Date>
          {children}
        </Styled.Content>

        {item.status === 'SENT' && <Styled.NotificationStatus />}
      </Styled.Wrapper>
    );
  }
);

NotificationDetail.displayName = 'NotificationDetail';
