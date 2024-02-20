import { classnames } from '@myapp/shared/utils';
import { TabPanel } from '@mui/lab';
import { memo } from 'react';
import { NotificationDetail } from '../notification-detail';
import * as SX from './sx';
import type { NotificationPanelProps as Props } from './types';

export const NotificationPanel = memo(
  ({ className, value, items, ...other }: Props) => {
    return (
      <TabPanel
        className={classnames('NotificationPanel', className)}
        sx={SX.tabPanel}
        value={value}
        {...other}
      >
        {items.map((item) => (
          <NotificationDetail key={item.id} item={item} />
        ))}
      </TabPanel>
    );
  }
);

NotificationPanel.displayName = 'NotificationPanel';
