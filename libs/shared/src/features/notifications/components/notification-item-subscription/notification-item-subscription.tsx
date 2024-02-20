import { SHARED_ROUTES } from '@myapp/shared/constants';
import { useRedirect } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { NotificationItemSubscriptionProps as Props } from './types';

export const NotificationItemSubscription = memo(
  ({ className, item }: Props) => {
    const redirect = useRedirect();
    const handleClick = () => {
      redirect(SHARED_ROUTES.priceAndPlan);
    };
    return (
      <Styled.Wrapper
        onClick={handleClick}
        item={item}
        className={classnames('NotificationItemSubscription', className)}
        sx={SX.root}
      />
    );
  }
);

NotificationItemSubscription.displayName = 'NotificationItemSubscription';
