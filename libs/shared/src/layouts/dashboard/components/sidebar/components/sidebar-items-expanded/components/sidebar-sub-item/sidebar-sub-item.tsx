import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './styles';
import * as SX from './sx';
import type { SidebarSubItemProps as Props } from './types';

export const SidebarSubItem = memo(
  ({ className, title, icon, route }: Props) => {
    const location = useLocation();
    const active = location.pathname.endsWith(route);

    return (
      <Styled.Wrapper
        className={classnames('SidebarSubItem', className)}
        sx={SX.root}
        to={route}
      >
        {icon && (
          <Styled.Icon
            className={classnames({ active })}
            name={icon}
            size={18}
            color="grey.500"
          />
        )}
        <Styled.Title
          className={classnames({ active })}
          variant="caption"
          color="grey.500"
          children={title}
        />
      </Styled.Wrapper>
    );
  }
);

SidebarSubItem.displayName = 'SidebarSubItem';
