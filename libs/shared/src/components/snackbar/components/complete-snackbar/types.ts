import { CustomContentProps } from 'notistack';
import { ReactNode } from 'react';

export interface CompleteSnackbarProps extends CustomContentProps {
  className?: string;
  title?: string | ReactNode;
}
