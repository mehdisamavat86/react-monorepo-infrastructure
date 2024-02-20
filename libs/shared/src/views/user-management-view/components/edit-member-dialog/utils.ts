import { MemberType } from '@myapp/shared/definition';
import { EditMemberRequest } from '../../api/types';
import { EditMemberFormData } from './types';

export function prepareEditMemberData({
  type,
  user,
}: EditMemberFormData): EditMemberRequest {
  return {
    member: {
      user,
      type: type as MemberType,
    },
  };
}
