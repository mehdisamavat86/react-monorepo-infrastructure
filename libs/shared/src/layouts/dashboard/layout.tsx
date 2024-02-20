import { useLocation } from 'react-router-dom';
import { Scrollbar, useSettingsContext } from '@myapp/shared/components';
import { useBoolean } from '@myapp/shared/hooks';
import { SHARED_ROUTES } from '@myapp/shared/constants';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { LAYOUT, SIDENAV } from '../config-layout';
import { Sidebar } from './components/sidebar';
import Header from './header';
import Main from './main';
import NavVertical from './nav-vertical';
import type { DashboardLayoutOptions } from './types';

type Props = {
  children: React.ReactNode;
  options: DashboardLayoutOptions;
};

export default function DashboardLayout({ children, options = {} }: Props) {
  const settings = useSettingsContext();
  const nav = useBoolean(options.navigation?.header?.closable);

  const { pathname } = useLocation();
  const isPricingPage =
    pathname === SHARED_ROUTES.priceAndPlan ||
    pathname === SHARED_ROUTES.billingStatusSuccess ||
    pathname === SHARED_ROUTES.billingStatusCancel;

  useEffect(() => {
    settings.setMinimizeAble(!!options.navigation?.header?.closable);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.navigation?.header?.closable]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: `${
          Number(String(options?.headerGap)) >= 0
            ? options.headerGap
            : LAYOUT.SPACE
        }px`,
        height: '100vh',
      }}
    >
      {options.topElement}
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {SIDENAV.W && !isPricingPage && <Sidebar options={options.sidebar} />}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: !isPricingPage
              ? `calc(100vw - ${SIDENAV.W ? SIDENAV.W : 0}px)`
              : '100vw',
            marginLeft: `${SIDENAV.W && !isPricingPage ? SIDENAV.W : 0}px`,
          }}
        >
          <Header onOpenNav={nav.onTrue} options={options.header} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              flex: 1,
              height: '100%',
              mx: `${LAYOUT.SPACE}px`,
              mb: `${LAYOUT.SPACE}px`,
              gap: `${LAYOUT.SPACE * 1.6}px`,
              overflowY: 'auto',
            }}
          >
            {!isPricingPage && !options.hideNavVertical && (
              <NavVertical
                openNav={nav.value}
                onCloseNav={nav.onFalse}
                options={options.navigation}
              />
            )}

            <Main>
              <Scrollbar
                className="MainContentScrollBar"
                classNames={{
                  contentEl: 'MainContentScrollBar_Content',
                  contentWrapper: 'MainContentScrollBar_ContentWrapper',
                }}
                sx={{
                  height: 1,
                  '& .MainContentScrollBar_Content': {
                    flexGrow: 1,
                  },
                  '& .MainContentScrollBar_ContentWrapper': {
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    '::-webkit-scrollbar': {
                      display: 'none',
                    },
                  },
                }}
              >
                {children}
              </Scrollbar>
            </Main>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
