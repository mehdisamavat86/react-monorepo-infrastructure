import type { FunctionComponent } from 'react';

export interface BillingInformationProps {
  className?: string;
}

export interface BillingInformationInputProps {
  className?: string;
  name: string;
  size?: string;
  label: string;
  element?: FunctionComponent<any>;
  extra?: Record<string, any>;
}
