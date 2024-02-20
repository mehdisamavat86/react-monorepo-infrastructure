import { CustomContentProps } from 'notistack';
import { ReactNode } from 'react';

export interface ProgressSnackbarProps extends CustomContentProps {
  className?: string;
  title?: string | ReactNode;
}
