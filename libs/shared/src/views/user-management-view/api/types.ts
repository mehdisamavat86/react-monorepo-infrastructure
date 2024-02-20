import type { MemberStatus, Workspace } from '@myapp/shared/definition';
import type { MemberFields } from '../../invite-member-view/components/add-member-form';

export interface EditMemberData {
  user: Pick<MemberFields, 'firstName' | 'lastName'>;
  type: MemberFields['type'];
}

export type DisableMemberData = EditMemberData & {
  status: MemberStatus;
};

export interface EditMemberRequest {
  member: EditMemberData;
}

export type EditMemberResponse = Workspace;

export interface DisableMemberRequest {
  member: DisableMemberData;
}

export type DisableMemberResponse = Workspace;
