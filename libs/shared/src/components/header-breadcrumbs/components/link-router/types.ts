import { LinkProps } from '@mui/material';

export interface LinkRouterProps extends LinkProps {
  className?: string;
  to: string;
  replace?: boolean;
}
