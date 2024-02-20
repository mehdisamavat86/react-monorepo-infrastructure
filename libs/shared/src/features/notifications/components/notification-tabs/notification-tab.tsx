import { classnames } from '@myapp/shared/utils';
import { Chip, Stack, Tab, Typography } from '@mui/material';
import { memo } from 'react';
import { useBrowseNotificationsCountApi } from '../../api/use-browse-notifications-count-api';
import { NotificationMessageGroup } from '../../types';
import type { NotificationTabProps as Props } from './types';

export const NotificationTab = memo(
  ({ className, value, items, ...other }: Props) => {
    const api = useBrowseNotificationsCountApi();
    const isUpdate = value === NotificationMessageGroup.UPDATE;
    const tabGroup = isUpdate
      ? NotificationMessageGroup.UPDATE
      : NotificationMessageGroup.EVENT;

    const count = api.data?.find((c) => c.group === tabGroup);

    return (
      <Tab
        className={classnames('NotificationTab', className)}
        value={value}
        label={
          <Stack flexDirection="row" alignItems="center" gap={1}>
            <Typography variant="body2" fontWeight={600}>
              {isUpdate ? 'Updates' : 'Events'}
            </Typography>
            <Chip variant="soft" label={count?.count || 0} />
          </Stack>
        }
        {...other}
      />
    );
  }
);

NotificationTab.displayName = 'NotificationTab';
