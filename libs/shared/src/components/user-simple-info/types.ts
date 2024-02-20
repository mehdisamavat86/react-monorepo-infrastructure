import type { AuthUser, User, UserRelation } from '@myapp/shared/definition';

export interface UserSimpleInfoProps {
  className?: string;
  user: User | UserRelation | AuthUser;
}
