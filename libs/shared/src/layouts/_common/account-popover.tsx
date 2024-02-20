import { ReactNode } from 'react';
import { useAuthContext } from '@myapp/shared/auth';
import {
  CustomPopover,
  Icon,
  IconType,
  Scrollbar,
  SwitchModeMenuItem,
  TextEllipsis,
  usePopover,
} from '@myapp/shared/components';
import { varHover } from '@myapp/shared/components/animate';
import { toValidDownloadUrl } from '@myapp/shared/utils';
import { useWorkspaceMember } from '@myapp/shared/workspace';
import { Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { m } from 'framer-motion';
import { AccountPopoverCredits } from './components/account-popover-credits';
import { AccountPopoverSubscriptionPlan } from './components/account-popover-subscription-plan';
import {
  AccountMenuOptions,
  SettingsMenuItems,
} from './components/settings-menu-items';
import * as Styled from './styles';
import * as SX from './sx';

export enum AccountMenuItemType {
  LINK = 'LINK',
  TITLE = 'TITLE',
  DIVIDER = 'DIVIDER',
}

export type AccountMenuItem =
  | {
      key?: string;
      label: ReactNode;
      linkTo?: string;
      icon?: IconType;
      type?: AccountMenuItemType;
      disabled?: boolean;
      blank?: boolean;
    }
  | 'divider';

export default function AccountPopover({ items }: AccountMenuOptions) {
  const { logOut, user, userFullName } = useAuthContext();
  const member = useWorkspaceMember();
  const popover = usePopover();

  const handleLogout = async () => {
    try {
      popover.onClose();
      await logOut();
    } catch (error) {
      console.error(error);
    }
  };
  const handleClickItem = () => {
    popover.onClose();
  };

  return (
    <CustomPopover
      state={popover}
      sx={SX.accountPopover}
      contentSx={{ p: 0, maxHeight: '100vh' }}
      element={
        <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          sx={{
            width: 40,
            height: 40,
            background: (theme) => alpha(theme.palette.grey[500], 0.08),
          }}
        >
          <Styled.Avatar
            src={toValidDownloadUrl(user?.attributes?.avatar)}
            alt={userFullName}
            variant="square"
            sx={{
              width: 36,
              height: 36,
            }}
          />
        </IconButton>
      }
      titleSx={{
        border: 0,
        borderColor: 'divider',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        px: 1,
        pt: 2,
        gap: 0,
      }}
      title={
        <Styled.AccountPopoverTitleWrapper>
          <Tooltip title={userFullName}>
            <Typography variant="subtitle2" noWrap sx={{ width: 1 }}>
              {userFullName || 'Unknown'}
            </Typography>
          </Tooltip>
          <Stack direction="row" gap={0.5}>
            <Styled.AccountPopoverUserTypeText>
              {member.type.toLocaleLowerCase()}
            </Styled.AccountPopoverUserTypeText>
            <TextEllipsis
              tooltipValue={user?.email}
              w="250"
              children={
                <Styled.AccountPopoverEmailText>
                  | <span>{user?.email || 'no email'}</span>
                </Styled.AccountPopoverEmailText>
              }
            />
          </Stack>
        </Styled.AccountPopoverTitleWrapper>
      }
    >
      <Stack sx={{ px: 1, gap: 1, width: '100%' }}>
        <AccountPopoverCredits />
        <AccountPopoverSubscriptionPlan />
      </Stack>
      <Stack sx={{ mt: 1, pb: 1 }}>
        <Scrollbar
          className="AccountPopoverScrollBar"
          classNames={{
            contentEl: 'AccountPopoverScrollBar_Content',
            contentWrapper: 'AccountPopoverScrollBar_ContentWrapper',
          }}
          sx={{
            '@media (min-height: 1000px)': {
              '& .simplebar-wrapper': {
                height: 'auto',
              },
            },
            '& .AccountPopoverScrollBar_Content': {
              flexGrow: 1,
            },
            '& .AccountPopoverScrollBar_ContentWrapper': {
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              '::-webkit-scrollbar': {
                display: 'none',
              },
            },
          }}
        >
          <SwitchModeMenuItem />
          <SettingsMenuItems items={items} onClickItem={handleClickItem} />
          <Styled.MenuItemLogout onClick={handleLogout}>
            Logout
          </Styled.MenuItemLogout>
        </Scrollbar>
      </Stack>
    </CustomPopover>
  );
}
