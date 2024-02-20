import { ButtonProps } from '@mui/material';
import { SubscriptionPlan } from '@myapp/shared/definition';
import { SxStyle } from '@myapp/shared/theme';
import { PlanConfig } from '../../../../types';

export interface PlanSubscribeProps {
  className?: string;
  SubMode?: string;
  plan?: SubscriptionPlan;
  config: PlanConfig;
}

export interface SubMode {
  mode: string;
  title: string;
  style: SxStyle;
  variant: ButtonProps['variant'];
}
