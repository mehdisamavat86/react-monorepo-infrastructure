import { Nullable, UserRelation } from '@myapp/shared/definition';

export enum MemberType {
  Owner = 'OWNER',
  Admin = 'ADMIN',
  User = 'MEMBER',
}

export enum MemberStatus {
  Active = 'ACTIVE',
  Pending = 'PENDING',
  disable = 'INACTIVE',
  Failed = 'FAILED',
}

export interface Member {
  user: UserRelation;
  created: string;
  type: MemberType;
  status: MemberStatus;
}

export interface Transfer {
  user: UserRelation;
  created: string;
  status: MemberStatus;
}

export interface Workspace {
  id: string;
  created: string;
  name: string;
  user: UserRelation;
  status: MemberStatus;
  description: Nullable<string>;
  members: Member[];
  transfer: Transfer;
}

export interface WorkspaceRelation {
  id: string;
  user: UserRelation;
}
