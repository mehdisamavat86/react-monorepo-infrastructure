import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ActionButtonIconProps as Props } from './types';

export const ActionButtonIcon = memo(({ className, name, disabled }: Props) => {
  return (
    <Styled.Wrapper
      className={classnames('ActionButtonIcon', className)}
      sx={SX.root}
      name={name}
      size={16}
      color="common.black"
      sxx={{ opacity: disabled ? 0.2 : 1 }}
    />
  );
});

ActionButtonIcon.displayName = 'ActionButtonIcon';
