import type { AlertProps } from '@mui/material';
import { SxStyle } from '@myapp/shared/theme';

export interface ClosableAlertProps extends AlertProps {
  className?: string;
  titleSx?: SxStyle;
}
