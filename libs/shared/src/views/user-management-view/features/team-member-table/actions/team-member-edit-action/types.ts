import type { Member } from '@myapp/shared/definition';
import type { AdvanceTableActionProps } from '@myapp/shared/features';

export interface TeamMemberEditActionProps
  extends AdvanceTableActionProps<Member> {
  className?: string;
}

export enum TeamMemberActionType {
  edit = 'edit',
  disable = 'disable',
  enable = 'enable',
}
