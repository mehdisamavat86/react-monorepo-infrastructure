import { toRoute } from '@myapp/shared/utils';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  color: inherit;
`;

const RouterLink = forwardRef<
  HTMLAnchorElement,
  LinkProps & { params?: Record<string, any> }
>(({ params, to, ...other }, ref) => (
  <Wrapper ref={ref} {...other} to={toRoute(to as string, params)} />
));

export default RouterLink;
