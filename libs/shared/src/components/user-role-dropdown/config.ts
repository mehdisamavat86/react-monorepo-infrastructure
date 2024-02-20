import { MemberType } from '@myapp/shared/definition';

export const USER_MEMBER_OPTIONS = Object.values(MemberType).filter(
  (x) => typeof x === 'string'
);

export const USER_MEMBER_OPTIONS_WITHOUT_OWNER = USER_MEMBER_OPTIONS.filter(
  (x) => x !== MemberType.Owner
);
