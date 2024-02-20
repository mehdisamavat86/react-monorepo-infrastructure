import { Product } from './billing-product';
import { Nil, Nullable } from './global';

export enum SubscriptionStatus {
  ACTIVE = 'active',
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

export enum SubscriptionUsageType {
  metered = 'metered',
  licensed = 'licensed',
}

export enum SubscriptionInterval {
  yearly = 'year',
  monthly = 'month',
}

export interface SubscriptionPlanMetadata {
  is_free?: boolean;
  name: string;
  request: number;
  description?: string;
  most_popular?: string;
  comparison_data?: string;
}

export interface SubscriptionPlan {
  id: string;
  amount: number;
  amountDecimal: number;
  billingScheme: string;
  currency: string;
  interval: SubscriptionInterval;
  intervalCount: number;
  nickname: Nil<string>;
  metadata: SubscriptionPlanMetadata;
  trialPeriodDays: Nil<string>;
  usageType: SubscriptionUsageType;
  status: SubscriptionStatus;
  product: Product;
  trial: boolean;
}

export interface SubscriptionPrice {
  lastResponse: Nil<string>;
  rawJsonObject: Nil<string>;
  active: boolean;
  billingScheme: string;
  created: number;
  currency: string;
  currencyOptions: Nil<string>;
  customUnitAmount: Nil<string>;
  deleted: Nil<string>;
  id: string;
  livemode: boolean;
  lookupKey: Nil<string>;
  metadata: {
    request: number;
  };
  nickname: string;
  object: string;
  product: string;
  recurring: {
    lastResponse: Nil<string>;
    rawJsonObject: Nil<string>;
    aggregateUsage: Nil<string>;
    interval: string;
    intervalCount: number;
    trialPeriodDays: Nil<string>;
    usageType: string;
  };
  taxBehavior: string;
  tiers: Nil<string>;
  tiersMode: Nil<string>;
  transformQuantity: Nil<string>;
  type: string;
  unitAmount: number;
  unitAmountDecimal: number;
  productObject: Nil<string>;
}

export interface SubscriptionUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  level: Nullable<string>;
}

export interface Credit {
  charged?: number;
  used?: number;
}

export enum CancelSubscriptionReason {
  CUSTOMER_SERVICE = 'CUSTOMER_SERVICE',
  LOW_QUALITY = 'LOW_QUALITY',
  MISSING_FEATURES = 'MISSING_FEATURES',
  OTHER = 'OTHER',
  TOO_EXPENSIVE = 'TOO_EXPENSIVE',
  TOO_COMPLEX = 'TOO_COMPLEX',
}

export interface CustomerInfo {
  id?: string;
  name?: string;
  email?: string;
}

export interface CancellationDetail {
  comment?: string;
  feedback?: string;
  reason?: string;
}

export interface Current {
  id?: string;
  plan?: Plan;
  cancelAt: string;
  cancelAtPeriodEnd: boolean;
  canceledAt: string;
  cancellationDetails: CancellationDetail;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  daysUntilDue: string;
  description: string;
  startDate: string;
  endedAt: string;
  status: SubscriptionStatus;
}

export interface Next extends Current {}

export interface Plan {
  id?: string;
  product?: {
    name?: string;
  };
  trial?: true;
  amount?: number;
  amountDecimal?: number;
  billingScheme?: string;
  currency?: string;
  interval?;
  string;
  intervalCount?: string;
  nickname?: string;
  metadata: SubscriptionPlanMetadata;
}

export interface Subscription {
  customer?: CustomerInfo;
  current?: Current;
  next?: Next;
  credit?: Credit;
}
