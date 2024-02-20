import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { Icon } from '../icon';
import * as Styled from './styles';
import type { ReloadButtonProps as Props } from './types';

export const ReloadButton = memo(
  ({
    onReload,
    className,
    icon,
    iconProps,
    children,
    title,
    ...props
  }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('ReloadButton', className)}
        variant="outlined"
        color="inherit"
        size="medium"
        {...props}
        onClick={onReload}
      >
        {children || title || 'reload'}
        {icon !== false && <Icon name={icon || 'reload'} />}
      </Styled.Wrapper>
    );
  }
);

ReloadButton.displayName = 'ReloadButton';
