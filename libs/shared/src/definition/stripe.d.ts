import { Nil, Nullable } from './global';

export interface StripeRelation<T> {
  object: string;
  data: T[];
  has_more: boolean;
  url: string;
}

export interface StripeResponse<T = any> {
  lastResponse: Nil<string>;
  rawJsonObject: Nil<T>;
}

export interface StripePaginationRequest {
  startingAfter?: string;
  size?: number;
}

export interface StripePaginationResponse<T extends StripeResponse = any> {
  lastResponse: Nullable<string>;
  rawJsonObject: Nullable<any>;
  object: string;
  data: T[];
  hasMore: boolean;
  url: string;
  requestOptions: any;
  requestParams: Record<string, any>;
}
