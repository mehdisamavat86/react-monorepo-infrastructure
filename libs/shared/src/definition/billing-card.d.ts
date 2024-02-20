import { UserRelation } from './auth';
import { Nil } from './global';

export interface PaymentCard {
  country: string;
  description: Nil<string>;
  expYear: number;
  expMonth: number;
  fingerprint: string;
  funding: string;
  iin: Nil<string>;
  issuer: Nil<string>;
  last4: string;
}

export interface PaymentMethod {
  id: string;
  created: string;
  user: UserRelation;
  card: PaymentCard;
  status: string;
}
