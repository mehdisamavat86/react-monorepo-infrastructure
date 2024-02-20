import { LogoText } from '@myapp/shared/components/logo-text';
import { SHARED_ROUTES } from '@myapp/shared/constants';
import { useBoolean } from '@myapp/shared/hooks';
import { HEADER } from '@myapp/shared/layouts/config-layout';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { SidebarItemsExpanded } from './components/sidebar-items-expanded';
import { SidebarItemsMini } from './components/sidebar-items-mini';
import { SidebarSingleItem } from './components/sidebar-single-item';
import * as Styled from './styles';
import * as SX from './sx';
import type { SidebarProps as Props } from './types';
import { getAppLogoName } from './utils';

export const Sidebar = memo(({ className, options }: Props) => {
  const state = useBoolean();

  return (
    <Styled.Wrapper
      hideBackdrop
      anchor="left"
      PaperProps={{
        sx: SX.paper,
        onMouseLeave: () => state.onFalse(),
      }}
      open={state.value}
      variant="permanent"
      className={classnames('Sidebar', className)}
      sx={SX.root}
    >
      <Styled.MenuContainer
        className={classnames({ open: state.value, close: !state.value })}
        onMouseEnter={(e) => state.onTrue()}
      >
        <Styled.LogoWrapper className={classnames({ open: state.value })}>
          {!state.value ? (
            <Styled.Logo src="/assets/images/sidebar-logo.svg" alt="logo" />
          ) : (
            <>
              <Styled.Brand
                src={`/assets/icons/sidebar/${getAppLogoName()}.svg`}
                alt="logo"
              />
              <LogoText />
            </>
          )}
        </Styled.LogoWrapper>
        <SidebarSingleItem
          title="Home"
          icon="home"
          open={state.value}
          sx={{
            minHeight: HEADER.BOTTOM,
            borderBottom: (p) => `solid 1px ${p.palette.grey[200]}`,
          }}
        />

        {state.value ? (
          <SidebarItemsExpanded options={options} />
        ) : (
          <SidebarItemsMini options={options} />
        )}
        <SidebarSingleItem
          title="Settings"
          icon="setting-1"
          route={SHARED_ROUTES.settings}
          open={state.value}
          sx={SX.settings}
        />
      </Styled.MenuContainer>
    </Styled.Wrapper>
  );
});

Sidebar.displayName = 'Sidebar';
