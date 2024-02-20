import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as SidebarStyled from '../../styles';
import { getHumanizedAppName } from '../../utils';
import * as Styled from './styles';
import type { SidebarItemsMiniProps as Props } from './types';

export const SidebarItemsMini = memo(({ className, options }: Props) => {
  return (
    <Styled.Wrapper>
      {options?.items.map((item) => {
        const active =
          getHumanizedAppName().toLowerCase() === item.title.toLowerCase();
        return (
          <SidebarStyled.ButtonWrapper key={item.title}>
            <SidebarStyled.Button
              className={classnames({ active })}
              icon={item.icon?.(
                { sx: { opacity: item.enabled ? 1 : 0.2 } },
                active
              )}
            />
          </SidebarStyled.ButtonWrapper>
        );
      })}
    </Styled.Wrapper>
  );
});

SidebarItemsMini.displayName = 'SidebarItemsMini';
