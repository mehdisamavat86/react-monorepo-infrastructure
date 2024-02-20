import type { ConfirmDialogProps } from '@myapp/shared/components';
import type { Workspace } from '@myapp/shared/definition';

export interface TransferringOwnershipDialogProps {
  className?: string;
  state: ConfirmDialogProps['state'];
  workspace?: Workspace;
}
