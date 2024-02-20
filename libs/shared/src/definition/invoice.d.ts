import { User } from './billing-coupon';
import { Subscription } from './billing-subscription';
import { Nil } from './global';
import { StripeResponse } from './stripe';

export enum InvoiceStatus {
  draft = 'draft',
  open = 'open',
  void = 'void',
  paid = 'paid',
  uncollectible = 'uncollectible',
  incomplete = 'incomplete',
}

export interface Invoice extends StripeResponse {
  id: string;
  created: string;
  user: User;
  amountDue: number;
  amountPaid: number;
  attemptCount: number;
  attempted: boolean;
  autoAdvance: boolean;
  billingReason: 'subscription_create' | 'manual';
  collectionMethod: string;
  currency: string;
  description: Nil<string>;
  dueDate: Nil<string>;
  endingBalance: number;
  hostedInvoiceUrl: string;
  invoicePdf: string;
  nextPaymentAttempt: Nil<string>;
  number: string;
  paid: boolean;
  paidOutOfBand: boolean;
  periodEnd: number;
  periodStart: number;
  postPaymentCreditNotesAmount: number;
  prePaymentCreditNotesAmount: number;
  receiptNumber: Nil<string>;
  startingBalance: number;
  statementDescriptor: Nil<string>;
  status: InvoiceStatus;
  subtotal: number;
  subtotalExcludingTax: number;
  tax: Nil<string>;
  total: number;
  totalExcludingTax: number;
  subscription?: Subscription;
}
