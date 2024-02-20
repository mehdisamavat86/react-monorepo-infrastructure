export interface AccountPopoverCreditsProps {
  className?: string;
}

export enum CreditType {
  EXPORT = 'Export',
  SEARCH = 'Search',
  CREDIT = 'Credit',
}
export interface Customer {
  id: string;
  name: string;
  email: string;
}
export interface Plan {
  id: string;
  amount: number;
  amountDecimal: number;
  billingScheme: string;
  currency: string;
  interval: string;
  intervalCount: number;
  nickname: string;
  metadata: Metadata;
}
export interface Metadata {
  is_free: string;
  name: string;
  request: string;
}
export interface CancellationDetails {
  comment?: null;
  feedback?: null;
  reason?: null;
}
export interface Credit {
  charged: number;
  used: number;
}

export interface CurrentSubscription {
  id: string;
  created: string;
  customer: Customer;
  plan: Plan;
  applicationFeePercent?: null;
  billingCycleAnchor: string;
  cancelAt?: null;
  cancelAtPeriodEnd: boolean;
  canceledAt?: null;
  cancellationDetails: CancellationDetails;
  collectionMethod: string;
  currency: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  daysUntilDue?: null;
  description?: null;
  startDate: string;
  endedAt?: null;
  credit: Credit;
  status: string;
}

export interface BrowseCurrentSubRequest {}

export interface BrowseCurrentSubResponse extends CurrentSubscription {}
