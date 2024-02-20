import { SHARED_ROUTES } from '@myapp/shared/constants';
import { useRedirect } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { NotificationItemAccountProps as Props } from './types';

export const NotificationItemAccount = memo(({ className, item }: Props) => {
  const redirect = useRedirect();
  const handleClick = () => redirect(SHARED_ROUTES.userProfile);

  return (
    <Styled.Wrapper
      className={classnames('NotificationItemAccount', className)}
      sx={SX.root}
      item={item}
      onClick={handleClick}
    />
  );
});

NotificationItemAccount.displayName = 'NotificationItemAccount';
