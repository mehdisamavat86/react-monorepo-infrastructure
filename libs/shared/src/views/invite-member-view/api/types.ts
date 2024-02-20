import type { Workspace } from '@myapp/shared/definition';
import type { MemberFields } from '../components/add-member-form';

export interface AddMemberData {
  user: Omit<MemberFields, 'type'>;
  type: MemberFields['type'];
}

export interface AddMemberRequest {
  members: AddMemberData[];
}

export type AddMemberResponse = Workspace;
