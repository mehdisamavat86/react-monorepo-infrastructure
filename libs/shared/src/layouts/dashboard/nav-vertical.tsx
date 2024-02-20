import {
  NavSectionProps,
  NavSectionVertical,
  Scrollbar,
  useIsMiniLayout,
} from '@myapp/shared/components';
import { useResponsive } from '@myapp/shared/hooks';
import { usePathname } from '@myapp/shared/router';
import { bgBlur } from '@myapp/shared/theme';
import { Box, Drawer, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import { NavHeader } from '../_common';
import { NAV } from '../config-layout';

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
  options?: NavSectionProps;
};

export default function NavVertical({
  openNav,
  onCloseNav,
  options: _options,
}: Props) {
  const pathname = usePathname();
  const lgUp = useResponsive('up', 'md');
  const isMini = useIsMiniLayout();
  const theme = useTheme();
  const { footer, prepend, ...options } = _options || {};
  const isDark = theme.palette.mode === 'dark';
  const width = isMini
    ? { lg: NAV.W_MINI, md: NAV.W_MINI }
    : { lg: NAV.W_VERTICAL };

  useEffect(() => {
    if (openNav) onCloseNav();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 'auto',
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
        pb: 3,
        ...options.config?.sx,
      }}
    >
      <NavSectionVertical {...options} />

      {prepend}

      {footer}
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width,
        boxSizing: 'content-box',
        position: 'relative',
        borderTop: `1px solid ${
          isDark ? theme.palette.grey[900] : theme.palette.grey[400]
        }`,
        borderRight: `1px solid ${
          isDark ? theme.palette.grey[900] : theme.palette.grey[400]
        }`,
        ...bgBlur({
          color: isDark ? theme.palette.grey[800] : theme.palette.common.white,
        }),
        paddingBottom: theme.spacing(1),
        ...options?.sx,
      }}
    >
      {lgUp ? (
        <Stack
          sx={{
            height: 1,
            width: width.lg,
          }}
        >
          {options?.header && <NavHeader {...options.header} />}
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: width.lg,
            },
          }}
        >
          {options?.header && (
            <NavHeader {...(options.header as any)} closable={false} />
          )}
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
