import { SHARED_ROUTES } from '@myapp/shared/constants';
import { useRedirect } from '@myapp/shared/router';
import { classnames, toUrl } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { NotificationItemCrawlRequestProps as Props } from './types';

export const NotificationItemCrawlRequest = memo(
  ({ className, item }: Props) => {
    const redirect = useRedirect();
    const handleClick = () => {
      const url = toUrl(SHARED_ROUTES.search, {
        page: 0,
        size: 25,
      });
      redirect(url);
    };

    return (
      <Styled.Wrapper
        onClick={handleClick}
        item={item}
        className={classnames('NotificationItemCrawlRequest', className)}
        sx={SX.root}
      />
    );
  }
);

NotificationItemCrawlRequest.displayName = 'NotificationItemCrawlRequest';
