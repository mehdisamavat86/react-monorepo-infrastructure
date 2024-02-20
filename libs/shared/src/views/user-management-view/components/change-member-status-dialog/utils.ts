import { MemberStatus as Status } from '@myapp/shared/definition';
import { DisableMemberRequest } from '../../api/types';
import { DisableMemberItem } from './types';

export function prepareDisableMemberData({
  type,
  user,
  status,
}: DisableMemberItem): DisableMemberRequest {
  return {
    member: {
      user,
      type,
      status: status === Status.Active ? Status.disable : Status.Active,
    },
  };
}
