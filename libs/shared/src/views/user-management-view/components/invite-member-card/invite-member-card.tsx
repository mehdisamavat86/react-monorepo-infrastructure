import { FakeAvatarsGroup } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { useIsOwner } from '@myapp/shared/workspace';
import { Typography } from '@mui/material';
import { memo } from 'react';
import { AddMemberDialog } from '../add-member-dialog';
import * as Styled from './styles';
import type { InviteMemberCardProps as Props } from './types';

export const InviteMemberCard = memo(({ className }: Props) => {
  const isOwner = useIsOwner();

  return (
    <Styled.Wrapper className={classnames('InviteMemberCard', className)}>
      <Styled.Header>
        <FakeAvatarsGroup />
      </Styled.Header>

      <Styled.Content>
        <Styled.Title>
          <Typography color="text">Team up!</Typography>
          <Typography color="text">
            Invite members to build you team!
          </Typography>
        </Styled.Title>

        <Styled.Description>
          <Typography color="text.secondary">
            You may invite as many team members as you like!
          </Typography>
        </Styled.Description>
      </Styled.Content>

      {isOwner && (
        <Styled.Footer>
          <AddMemberDialog />
        </Styled.Footer>
      )}
    </Styled.Wrapper>
  );
});

InviteMemberCard.displayName = 'InviteMemberCard';
