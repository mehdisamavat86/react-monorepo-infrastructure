import { Icon } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { Typography } from '@mui/material';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './styles';
import * as SX from './sx';
import type { SidebarSingleItemProps as Props } from './types';

export const SidebarSingleItem = memo(
  ({ className, open, title, icon, route, sx }: Props) => {
    const location = useLocation();
    const active = route ? location.pathname.includes(route) : false;

    return (
      <Styled.Wrapper
        className={classnames('SidebarSingleItem', className, { open })}
        sx={sx}
      >
        {!open ? (
          <Styled.ButtonWrapper>
            <Styled.Button
              className={classnames({ active })}
              icon={
                <Icon
                  name={icon}
                  size={24}
                  color={active ? 'primary' : 'common.black'}
                />
              }
            />
          </Styled.ButtonWrapper>
        ) : (
          <Styled.SettingWrapper
            to={route ?? '#'}
            className={classnames({ active })}
          >
            <Icon
              name={icon}
              size={20}
              color={active ? 'primary.main' : 'common.black'}
            />
            <Typography
              variant="caption"
              color={active ? 'primary.main' : 'common.black'}
              children={title}
              sx={SX.title}
            />
          </Styled.SettingWrapper>
        )}
      </Styled.Wrapper>
    );
  }
);

SidebarSingleItem.displayName = 'SidebarSingleItem';
