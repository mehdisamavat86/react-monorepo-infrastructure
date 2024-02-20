import type { ReasonData } from '../cancel-subscription/types';

export type ReasonDataWithValidity = ReasonData & { isValid?: boolean };

export interface CancelSubscriptionReasonListProps {
  className?: string;
  value: ReasonData;
  onChange: (reason: ReasonDataWithValidity) => void;
}
