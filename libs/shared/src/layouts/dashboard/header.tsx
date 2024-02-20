import { LogoText } from '@myapp/shared/components/logo-text';
import { SwitchMode } from '@myapp/shared/components/settings/components/switch-mode';
import { SvgColor } from '@myapp/shared/components/svg-color';
import { Notifications } from '@myapp/shared/features/notifications';
import { ClearAllNotificationsAction } from '@myapp/shared/features/notifications/actions/clear-all-notifications-action';
import { useResponsive } from '@myapp/shared/hooks';
import { UpgradePlanButton } from '@myapp/shared/layouts/_common/components/upgrade-plan-button';
import { bgBlur } from '@myapp/shared/theme/css';
import { AppBar, Box, IconButton, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AccountPopover } from '../_common';
import { HEADER, LAYOUT } from '../config-layout';
import * as Styled from './styles';
import type { DashboardLayoutHeaderOptions } from './types';

type Props = {
  onOpenNav?: VoidFunction;
  options?: DashboardLayoutHeaderOptions;
};

export default function Header({ onOpenNav, options }: Props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const lgUp = useResponsive('up', 'md');

  const renderContent = (
    <Stack flexGrow={1} direction="column" alignItems="center" height="100%">
      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        spacing={{ xs: 0.5, sm: 1 }}
        width="100%"
        height={HEADER.TOP}
        sx={{
          borderBottom: `1px solid ${
            isDark ? theme.palette.primary[100] : theme.palette.primary[100]
          }`,
          // Don't add padding here because it breaks background image view
        }}
      >
        {!lgUp && (
          <IconButton onClick={onOpenNav} size="small">
            <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
          </IconButton>
        )}

        <Styled.LogoWrapper>
          <LogoText />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 0.5,
            }}
          >
            {options?.breadcrumb && options?.breadcrumb}
          </Box>
        </Styled.LogoWrapper>

        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={{ xs: 0.5, sm: 1 }}
          px={{ xs: 0.5, sm: 4 }}
        >
          {options?.end}

          <Notifications
            actions={[
              <ClearAllNotificationsAction key="clear-all-notifications-action" />,
            ]}
          />

          <UpgradePlanButton />

          {options?.showThemeModeSwitch && <SwitchMode />}

          <AccountPopover {...options?.accountMenu} />
        </Stack>
      </Stack>
      {options?.start && (
        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1 }}
          width="100%"
          height={HEADER.BOTTOM}
          px={4}
          py={1.5}
        >
          {options?.start}
        </Stack>
      )}
    </Stack>
  );
  return (
    <AppBar
      position="relative"
      sx={{
        maxHeight: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        borderRadius: `${HEADER.BORDER_RADIUS}px`,
        mx: `${LAYOUT.SPACE}px`,
        width: 'unset',
        ...bgBlur({
          color: isDark ? theme.palette.grey[800] : theme.palette.common.white,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          maxHeight: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Styled.Toolbar sx={{ height: 1 }}>{renderContent}</Styled.Toolbar>
    </AppBar>
  );
}
