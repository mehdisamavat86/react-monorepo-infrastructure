import { Nil } from './global';

export enum CouponStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}


export interface Coupon {
  id: string;
  name: string;
  currency: Nil<string>;
  amountOff: Nil<string>;
  percentOff: number;
  duration: string;
  durationInMonths: Nil<string>;
  maxRedemptions: Nil<string>;
  redeemBy: Nil<string>;
  timesRedeemed: number;
  valid: boolean;
}

export interface Promotion {
  id: string;
  user: User;
  coupon: Coupon;
  code: string;
  created: string;
  expiresAt: Nil<string>;
  maxRedemptions: Nil<string>;
  timesRedeemed: number;
  status: CouponStatus;
}
