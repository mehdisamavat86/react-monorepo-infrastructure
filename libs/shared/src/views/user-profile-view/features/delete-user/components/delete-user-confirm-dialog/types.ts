import type { UseBoolean } from '@myapp/shared/hooks';

export interface DeleteUserConfirmDialogProps {
  className?: string;
  state: UseBoolean;
  onSubmit: (reason: string) => void;
}

// TODO this is not finalized
export enum DeleteUserReason {
  TEMPORARY = 'TEMPORARY',
  TOO_COMPLEX = 'TOO_COMPLEX',
  TOO_EXPENSIVE = 'TOO_EXPENSIVE',
  FINISHED_THE_WORK = 'FINISHED_THE_WORK',
  LOW_QUALITY = 'LOW_QUALITY',
  OTHER = 'OTHER',
}

export type ReasonData = {
  reason?: DeleteUserReason;
  description: string;
};
