import { Nullable } from './global';

export enum BillingAccountStatus {
  ACTIVE = 'ACTIVE',
  ALL = 'ALL',
  CANCELED = 'CANCELED',
  ENDED = 'ENDED',
  INCOMPLETE = 'INCOMPLETE',
  INCOMPLETE_EXPIRED = 'INCOMPLETE_EXPIRED',
  PAST_DUE = 'PAST_DUE',
  PAUSED = 'PAUSED',
  TRIALING = 'TRIALING',
  UNPAID = 'UNPAID',
}

export interface AccountUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  level: Nullable<string>;
}

export interface BillingAccount {
  id: string;
  created: string;
  user: AccountUser;
  realm: string;
  balance: number;
  status: BillingAccountStatus;
}
