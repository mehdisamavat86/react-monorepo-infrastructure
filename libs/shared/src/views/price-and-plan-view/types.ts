import type { IconType } from '@myapp/shared/components';
import type { ButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface CurrentPlan {
  currentEnd?: string | undefined;
}
export interface NextPlan {
  nextStart?: string | undefined;
}

export type PlanConfig = {
  dialogContent?: JSX.Element;
  icon?: IconType;
  buttonTitle: ReactNode;
  title: ReactNode;
  variant: ButtonProps['variant'];
  color: ButtonProps['color'];
  textColor: string;
  titleColor: string;
  disabled?: boolean;
  current?: CurrentPlan;
  next?: NextPlan;
};

export enum ActionType {
  UPGRADE = 'upgrade',
  DOWNGRADE = 'downgrade',
}
