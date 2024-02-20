import { Maybe } from '@myapp/shared/definition';
import { SxStyle } from '@myapp/shared/theme';
import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ViewMoreProps {
  className?: string;
  list: Maybe<ReactNode[]>;
  limit: number;
  displayTags?: number;
  buttonSx?: SxStyle;
  buttonProps?: ButtonProps;
}
