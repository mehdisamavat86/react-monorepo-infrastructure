import type { PropsWithChildren } from 'react';

export interface BillingStoreData {
  yearly: boolean;
  setYearly: (value: boolean) => void;
  toggleYearly: () => void;
}

export interface BillingContextProps extends PropsWithChildren {}
