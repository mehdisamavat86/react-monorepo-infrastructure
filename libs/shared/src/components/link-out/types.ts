import type { ButtonProps, LinkProps } from '@mui/material';

export interface LinkOutProps
  extends Omit<ButtonProps, 'onClick' | 'component'>,
    Pick<LinkProps, 'target'> {
  className?: string;
  href: string;
}
