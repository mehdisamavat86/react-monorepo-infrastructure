import { PopoverListButtonItem } from '@myapp/shared/components';
import { ChangeEmailActionType as ActionType } from './types';

export const TRANSFER_ACCOUNT_OWNERSHIP_ITEMS: PopoverListButtonItem[] = [
  {
    label: 'Resend',
    key: ActionType.resend,
    icon: 'send',
  },
  {
    label: 'Cancel',
    key: ActionType.cancel,
    icon: 'cancel',
  },
];
