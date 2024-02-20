import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { NotificationItemUpdateProps as Props } from './types';

export const NotificationItemUpdate = memo(({ className, item }: Props) => {
  return (
    <Styled.Wrapper
      item={item}
      className={classnames('NotificationItemUpdate', className)}
      sx={SX.root}
    />
  );
});

NotificationItemUpdate.displayName = 'NotificationItemUpdate';
