import { Nullable } from './global';

export enum BillingPlanInterval {
  monthly = 'month',
  yearly = 'year',
}

export enum BillingPlanType {
  PAY_AS_YOU_GO = 'PayAsYouGo',
  SUBSCRIPTION = 'Subscription',
}

export interface GraduatedPlan {
  id: string;
  firstUnit: number;
  lastUnit: Nullable<number>;
  perUnit: number;
}
