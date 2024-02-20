import { classnames, urlToValidHttps } from '@myapp/shared/utils';
import { Link } from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import type { LinkOutProps as Props } from './types';

export const LinkOut = memo(
  ({ className, href, target, variant, ...other }: Props) => {
    const path = urlToValidHttps(href);

    return (
      <Styled.Wrapper
        className={classnames('LinkOut', className)}
        {...(other as any)}
        component={Link}
        color="primary"
        variant={variant || 'text'}
        href={path}
        target={target || '_blank'}
        onClick={(e) => e.stopPropagation()}
      />
    );
  }
);

LinkOut.displayName = 'LinkOut';
