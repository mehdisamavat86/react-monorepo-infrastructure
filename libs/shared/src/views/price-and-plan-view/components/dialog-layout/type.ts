import { PropsWithChildren } from 'react';

export enum DialogType {
  DOWNGRADE = 'downgrade',
  SUCCESS = 'success',
  UPGRADE = 'upgrade',
}

export interface DialogLayoutProps extends PropsWithChildren {
  dialogType?: DialogType;
}
