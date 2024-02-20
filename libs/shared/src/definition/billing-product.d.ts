import { Nil } from './global';

export enum ProductStatus {
  Active = 'Active',
  Deactived = 'Deactived',
  Canceled = 'Canceled',
}

export interface Product {
  id: string;
  name: string;
  description: Nil<string>;
  unitLabel: string;
  status: ProductStatus;
}
