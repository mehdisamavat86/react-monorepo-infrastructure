import type { AdvanceTableActionProps } from '@myapp/shared/features';

export interface CopyIdActionProps
  extends AdvanceTableActionProps<{ id: string }> {
  className?: string;
}
