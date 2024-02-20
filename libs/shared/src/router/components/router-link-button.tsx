import { Button, ButtonProps } from '@mui/material';
import { ReactNode, memo } from 'react';
import type { LinkProps } from 'react-router-dom';
import RouterLink from './router-link';

export type RouterLinkButtonProps = ButtonProps & { label?: ReactNode } & Pick<
    LinkProps,
    'to' | 'replace' | 'target'
  >;

export const RouterLinkButton = memo(
  ({ children, label, ...props }: RouterLinkButtonProps) => (
    <Button component={RouterLink} variant="soft" {...(props as any)}>
      {children || label}
    </Button>
  )
);

export default RouterLinkButton;
