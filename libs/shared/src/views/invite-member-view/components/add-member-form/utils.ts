import { MemberType } from '@myapp/shared/definition';
import { AddMemberRequest } from '../../api/types';
import { AddMemberFormData } from './types';

export function prepareAddMemberData(
  data: AddMemberFormData
): AddMemberRequest {
  data.members ||= [];
  return {
    members: data.members.map(({ type, ...user }) => ({
      user,
      type: type as MemberType,
    })),
  };
}
