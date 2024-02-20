import { DashboardLayoutContent } from '@myapp/shared/layouts';
import { classnames } from '@myapp/shared/utils';
import { useIsOwner, useWorkspace } from '@myapp/shared/workspace';
import { memo } from 'react';
import { TeamMemberTable } from '../../features/team-member-table';
import { AddMemberDialog } from '../add-member-dialog';
import { InviteMemberCard } from '../invite-member-card';
import type { MembersViewContentProps as Props } from './types';

export const MembersViewContent = memo(({ className }: Props) => {
  const hasMember = !!useWorkspace()?.members.length;
  const isOwner = useIsOwner();

  return (
    <DashboardLayoutContent
      className={classnames('MembersViewContent', className)}
      title="Team Management"
      actions={hasMember && isOwner && <AddMemberDialog />}
      contentGradient={!hasMember}
    >
      {hasMember ? <TeamMemberTable /> : <InviteMemberCard />}
    </DashboardLayoutContent>
  );
});

MembersViewContent.displayName = 'MembersViewContent';
