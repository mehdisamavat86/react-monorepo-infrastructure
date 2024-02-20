import type { UserRelation, Workspace } from '@myapp/shared/definition';

export interface TransferLinkRequest {
  password: string;
  captcha: string;
  user: Omit<UserRelation, 'id'>;
}

export type TransferLinkResponse = Workspace;
