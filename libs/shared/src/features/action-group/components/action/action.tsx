import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ActionProps as Props } from './types';

export const Action = memo(({ className, item, onClick }: Props) => {
  const button = 'button' in item ? item.button : {};

  return (
    <Styled.Wrapper
      className={classnames('Action', className)}
      sx={SX.root}
      variant="soft"
      size="small"
      color="inherit"
      children="Action"
      {...(button as any)}
      onClick={() => onClick(item)}
    />
  );
});

Action.displayName = 'Action';
