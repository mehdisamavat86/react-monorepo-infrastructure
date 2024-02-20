import { Nullable } from './global';

export interface AuthToken {
  access_token: string;
  refresh_token: string;
  id_token: string;
  token_type: string;
  expires_in: number;
  refresh_expires_in: number;
  user: AuthUser;
}

interface AuthUserAttributes {
  title?: string;
  company?: string;
  site?: string;
  industry?: string;
  alternateEmail?: string;
  avatar?: string;
  phone?: string;
}

export interface AuthTokenPayload extends AuthUserAttributes {
  scope: string;
  sid: string;
  sub: string;
  email_verified: boolean;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
  resource_access: {
    web: {
      roles: UserRole[];
    };
  };
}

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  attributes?: AuthUserAttributes;
  roles?: UserRole[];
}

export interface UserRelation {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  level?: number;
  attributes?: AuthUserAttributes;
}

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  createdTimestamp: number;
  attributes?: AuthUserAttributes;
  roles: Nullable<string>;
}

export enum UserRole {
  TemplateSM = 'TmtSM',
  ProductSM = 'PrdSM',
  SingleSnippetSM = 'SPflSM',
  SubscriptionPlanSM = 'SPlnSM',
  TicketSM = 'TktSM',
  GraduatedPlanSM = 'GPlnSM',
  MessageSM = 'MsgSM',
  CompanySM = 'CnySM',
  EmailFinderSM = 'EFdrSM',
  SnipperFolderSM = 'SFdrSM',
  PromotionSM = 'PmnSM',
  RoleSM = 'RleSM',
  InvoiceSM = 'InvSM',
  BulkSnippetSM = 'SBlkSM',
  UserSM = 'UsrSM',
  SubscriptionSM = 'SubSM',
  SnippetSM = 'SptSM',
  EmailVerifierSM = 'EVfrSM',
  TransactionSM = 'TrnSM',
  CouponSM = 'CpnSM',
  AccountSM = 'AccSM',
}
