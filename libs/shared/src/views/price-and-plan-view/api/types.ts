import {
  CancelSubscriptionReason,
  PaginationRequest,
  Subscription,
  SubscriptionPlan,
} from '@myapp/shared/definition';

export interface BrowseSubscriptionPlanRequest extends PaginationRequest {}

export interface BrowseSubscriptionPlanResponse
  extends Array<SubscriptionPlan> {}

export interface CurrentSubscriptionRequest {}
export type CurrentSubscriptionResponse = Subscription;

export interface CancelSubscriptionRequest {
  feedback: CancelSubscriptionReason;
  comment?: string;
}

export type CancelSubscriptionResponse = Subscription;

export interface UpgradeSubscriptionPlanRequest {
  plan: string;
  redirect?: {
    success: string;
    failed: string;
  };
}
export interface UpgradeSubscriptionPlanResponse {
  id: string;
  url: string;
}

export enum SubscriptionActiveAction {
  SCHEDULE = 'schedule',
  IMMEDIATELY = 'immediately',
}
