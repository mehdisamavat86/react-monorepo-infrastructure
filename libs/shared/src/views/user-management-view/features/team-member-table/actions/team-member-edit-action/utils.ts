import { Member, MemberStatus } from '@myapp/shared/definition';
import { ITEMS } from './config';
import { TeamMemberActionType as ActionType } from './types';

export const filterMemberEditItems = (item: Member) => {
  if (item.status === MemberStatus.Pending)
    return ITEMS.filter((x) => x.key === ActionType.edit);
  if (item.status === MemberStatus.Active)
    return ITEMS.filter((x) => x.key !== ActionType.enable);
  return ITEMS.filter((x) => x.key !== ActionType.disable);
};
