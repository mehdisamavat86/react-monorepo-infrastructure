import type { AuthUser } from '@myapp/shared/definition';
import type { User, UserRelation } from '../definition';
import { joinStrings } from './string';

export function userGetFullName(
  user?: User | UserRelation | AuthUser | null,
  defaultName: string | 'username' = ''
) {
  return user
    ? joinStrings(user.firstName, user.lastName, ' ') || defaultName
    : defaultName;
}
