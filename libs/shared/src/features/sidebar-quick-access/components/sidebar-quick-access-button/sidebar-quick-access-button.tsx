import { Icon, useIsMiniLayout } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { SidebarQuickAccessButtonProps as Props } from './types';

export const SidebarQuickAccessButton = memo(
  ({
    className,
    title,
    titleMini,
    icon,
    endIcon,
    titleSx,
    to,
    target,
    miniProps,

    ...other
  }: Props) => {
    const isMini = useIsMiniLayout();

    return (
      <Styled.Wrapper
        className={classnames('SidebarQuickAccessButton', className, {
          mini: isMini,
        })}
        variant="text"
        {...other}
        {...(isMini ? miniProps : {})}
        to={to}
        target={target}
      >
        <Styled.TitleBox
          sx={{ ...titleSx, flexDirection: isMini ? 'column' : 'row' }}
        >
          {icon && <Icon name={icon} size={isMini ? 22 : 20} />}
          <Styled.Title>{isMini ? titleMini || title : title}</Styled.Title>
        </Styled.TitleBox>
        {!isMini && endIcon && <Icon name={endIcon} size={16} />}
      </Styled.Wrapper>
    );
  }
);

SidebarQuickAccessButton.displayName = 'SidebarQuickAccessButton';
