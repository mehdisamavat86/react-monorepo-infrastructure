import type { ReactNode } from 'react';
import {
  CustomDialogActionButtonProps,
  CustomDialogActionEvent,
  CustomDialogProps,
} from '../custom-dialog';

export type ConfirmDialogProps = Omit<
  CustomDialogProps,
  'actions' | 'closeButton'
> & {
  okTitle?: false | ReactNode;
  okProps?: CustomDialogActionButtonProps;
  cancelTitle?: false | ReactNode;
  cancelProps?: CustomDialogActionButtonProps;
  onOk?: CustomDialogActionEvent;
  onCancel?: CustomDialogActionEvent;
};
