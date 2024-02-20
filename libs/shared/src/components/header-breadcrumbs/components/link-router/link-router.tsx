import { Link } from '@mui/material';
import { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import type { LinkRouterProps as Props } from './types';

export const LinkRouter = memo((props: Props) => {
  return <Link {...props} component={RouterLink as any} />;
});

LinkRouter.displayName = 'LinkRouter';
