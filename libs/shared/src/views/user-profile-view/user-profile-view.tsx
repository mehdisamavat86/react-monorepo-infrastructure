import { BorderedCard } from '@myapp/shared/components';
import { DashboardLayoutContent } from '@myapp/shared/layouts/dashboard';
import { useIsOwner } from '@myapp/shared/workspace';
import { Box, Divider } from '@mui/material';
import { ChangeEmail } from './components/change-email';
import { ChangePassword } from './components/change-password';
import { ChangeUsername } from './components/change-username';
import { UploadProfileAvatar } from './components/upload-profile-avatar';
import { DeleteUser } from './features/delete-user';
import * as Styled from './styles';

export function UserProfileView() {
  const isOwner = useIsOwner();

  return (
    <DashboardLayoutContent title="My Profile" contentSx={{ gap: 6 }}>
      <Styled.TopBox>
        <UploadProfileAvatar />

        <BorderedCard>
          <Box
            rowGap="32px"
            columnGap={2}
            display="flex"
            flexDirection="column"
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <ChangeUsername />
              <Divider sx={{ borderStyle: 'dashed' }} />
            </Box>

            {isOwner && <ChangeEmail />}

            <ChangePassword />
          </Box>
        </BorderedCard>
      </Styled.TopBox>

      <DeleteUser />
    </DashboardLayoutContent>
  );
}
