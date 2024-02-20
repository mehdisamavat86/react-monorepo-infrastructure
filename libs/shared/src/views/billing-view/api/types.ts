import {
  Customer,
  Invoice,
  PaginationRequest,
  PaginationResponse,
  PaymentMethod,
} from '@myapp/shared/definition';

export interface ReadCustomerRequest {}
export type ReadCustomerResponse = Customer;

export type EditCustomerRequest = Customer;
export type EditCustomerResponse = Customer;

export interface BrowsePaymentCardRequest extends PaginationRequest {}

export interface BrowsePaymentCardResponse extends Array<PaymentMethod> {}

export interface BrowseInvoiceRequest extends PaginationRequest {}

export interface BrowseInvoiceResponse extends PaginationResponse<Invoice> {}

export interface DeletePaymentCardRequest {}
export type DeletePaymentCardResponse = PaymentMethod;
