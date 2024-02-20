import { CustomDialog } from '../custom-dialog';
import { ConfirmDialogProps as Props } from './types';

export default function ConfirmDialog({
  okTitle,
  cancelTitle,
  onCancel,
  onOk,
  okProps,
  cancelProps,
  ...props
}: Props) {
  return (
    <CustomDialog
      {...props}
      closeButton={
        cancelTitle === false
          ? false
          : {
              ...cancelProps,
              children: cancelTitle || 'Cancel',
              onClick: (e) => (onCancel ? onCancel(e) : e.toggle()),
            }
      }
      actions={
        okTitle
          ? [
              {
                variant: 'outlined',
                color: 'inherit',
                ...okProps,
                children: okTitle || 'OK',
                onClick: (e) => (onOk ? onOk(e) : e.toggle()),
              },
            ]
          : []
      }
    />
  );
}
