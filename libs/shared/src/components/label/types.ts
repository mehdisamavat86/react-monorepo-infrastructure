import type { BoxProps } from '@mui/material';

export type LabelColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export type LabelIcon =
  | 'close-circle-outline'
  | 'info'
  | 'check-circle-outline'
  | 'loading';

export type LabelVariant = 'filled' | 'outlined' | 'soft';

export interface LabelProps extends BoxProps {
  startIcon?: React.ReactElement | null;
  endIcon?: React.ReactElement | null;
  color?: LabelColor;
  variant?: LabelVariant;
}
