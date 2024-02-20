import { FakeAvatarsGroup } from '@myapp/shared/components';
import { DashboardLayoutContent } from '@myapp/shared/layouts/dashboard';
import { Stack } from '@mui/material';
import { AddMemberForm } from './components/add-member-form';
import { InviteMemberHeader } from './components/invite-member-header';
import * as Styled from './styles';

export function InviteMemberView() {
  return (
    <DashboardLayoutContent
      title="Team Management"
      contentGradient
      contentSx={{ justifyContent: 'center' }}
    >
      <Stack flexDirection="column" justifyContent="center" gap={6}>
        <Styled.Wrapper>
          <InviteMemberHeader />

          <AddMemberForm />
        </Styled.Wrapper>

        <FakeAvatarsGroup large />
      </Stack>
    </DashboardLayoutContent>
  );
}
