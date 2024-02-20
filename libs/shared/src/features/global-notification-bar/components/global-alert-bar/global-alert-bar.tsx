import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { GlobalAlertBarProps as Props } from './types';

export const GlobalAlertBar = memo(
  ({ className, children, icon, closable, ...alertProps }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('GlobalAlertBar', className, { closable })}
        {...alertProps}
        icon={icon}
      >
        {children}
      </Styled.Wrapper>
    );
  }
);

GlobalAlertBar.displayName = 'GlobalAlertBar';
