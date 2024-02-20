import type { Member } from '@myapp/shared/definition';
import type { MemberTableActionDialogProps } from '../../types';

export interface ChangeMemberStatusDialogProps
  extends MemberTableActionDialogProps {
  className?: string;
}

export type DisableMemberItem = Member;
