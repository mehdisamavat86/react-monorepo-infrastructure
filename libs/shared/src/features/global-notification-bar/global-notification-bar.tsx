import { SHARED_ROUTES } from '@myapp/shared/constants';
import { useLocation } from 'react-router-dom';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { SocialMediaBar } from './components/social-media-bar';
import { SubscriptionBar } from './components/subscription-bar';
import { PaymentBar } from './components/payment-bar';
import * as Styled from './styles';
import type { GlobalNotificationBarProps as Props } from './types';

export const GlobalNotificationBar = memo(({ className }: Props) => {
  const { pathname } = useLocation();

  if (pathname === SHARED_ROUTES.priceAndPlan) return null;

  return (
    <Styled.Wrapper
      className={classnames('GlobalNotificationBar', className)}
      spacing={1}
    >
      <SubscriptionBar />
      <SocialMediaBar />
      <PaymentBar />
    </Styled.Wrapper>
  );
});

GlobalNotificationBar.displayName = 'GlobalNotificationBar';
