import { SelectProps } from '@mui/material';
import { PropsWithChildren } from 'react';

export interface NumberSingleSelectProps
  extends SelectProps<string>,
    PropsWithChildren {
  className?: string;
}
