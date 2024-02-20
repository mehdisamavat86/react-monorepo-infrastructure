import { Nil } from '@myapp/shared/definition';
import { ActionType } from '../../types';

export interface StepTwoProps {
  className?: string;
  planName?: Nil<string>;
  actionType: ActionType;
}
