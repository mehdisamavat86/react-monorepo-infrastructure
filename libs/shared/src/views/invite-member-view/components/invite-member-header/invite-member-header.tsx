import { APP_NAME } from '@myapp/shared/constants';
import { classnames } from '@myapp/shared/utils';
import { Typography } from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import type { InviteMemberHeaderProps as Props } from './types';

export const InviteMemberHeader = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper className={classnames('InviteMemberHeader', className)}>
      <Typography variant="h6">Invite Team Members</Typography>

      <Typography variant="body1">
        When you invite members to join {APP_NAME}, they will receive an
        invitation email.
      </Typography>
    </Styled.Wrapper>
  );
});

InviteMemberHeader.displayName = 'InviteMemberHeader';
