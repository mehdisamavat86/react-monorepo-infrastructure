import { Typography } from '@mui/material';
import { APP_NAME } from '@myapp/shared/constants';
import { classnames, toRoute } from '@myapp/shared/utils';
import { invert } from 'lodash-es';
import { memo, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { LinkRouter } from './components/link-router';
import * as Styled from './styles';
import * as SX from './sx';
import type { HeaderBreadcrumbsProps as Props } from './types';

const UUID_REGEX = /^[a-f0-9]+-[a-f0-9]+-[a-f0-9]+-[a-f0-9]$/;

export const HeaderBreadcrumbs = memo(
  ({ className, config: { routes, titles } }: Props) => {
    const location = useLocation();
    const routeParams = useParams();
    const pathnames = location.pathname
      .split('/')
      .filter((x) => x)
      .map((x) => (x.match(UUID_REGEX) ? routeParams.id : x));
    const reverseRoutes = useMemo(() => {
      const cloned = { ...routes };
      Object.keys(cloned).forEach((k) => {
        cloned[k] = toRoute(cloned[k], routeParams);
      });
      return invert(cloned);
    }, [routes, routeParams]);
    const lables = useMemo(() => {
      const cloned = { ...titles };
      Object.keys(titles).forEach((k) => {
        cloned[k] = toRoute(cloned[k], routeParams);
      });
      return cloned;
    }, [routeParams, titles]);

    return (
      <Styled.Wrapper
        className={classnames('HeaderBreadcrumbs', className)}
        sx={SX.root}
      >
        <LinkRouter underline="hover" color="inherit" to="/">
          {APP_NAME?.replace('-', ' ')}
        </LinkRouter>
        {pathnames.map((value, index: number) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const lableIndex = reverseRoutes[to];

          return last ? (
            <Typography
              variant="caption"
              component="span"
              fontWeight="bold"
              sx={{
                color: (p) => p.palette.common.black,
                lineHeight: 2,
              }}
              key={to}
            >
              {lables[lableIndex] || '-'}
            </Typography>
          ) : (
            <LinkRouter underline="hover" color="inherit" to={to} key={to}>
              {lables[lableIndex] || '-'}
            </LinkRouter>
          );
        })}
      </Styled.Wrapper>
    );
  }
);

HeaderBreadcrumbs.displayName = 'HeaderBreadcrumbs';
