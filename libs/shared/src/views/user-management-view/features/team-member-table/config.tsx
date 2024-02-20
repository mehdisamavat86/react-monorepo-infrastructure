import {
  DateTime,
  LabelColor,
  StyledTag,
  UserSimpleInfo,
} from '@myapp/shared/components';
import { Member, MemberStatus } from '@myapp/shared/definition';
import { AdvanceTableConfig } from '@myapp/shared/features';
import { capitalize } from 'lodash-es';
import { TeamMemberEditAction } from './actions/team-member-edit-action';

const stateColor: { [key: string]: LabelColor } = {
  ACTIVE: 'success',
  PENDING: 'warning',
  DISABLED: 'default',
  FAILED: 'error',
};

export const config: Omit<AdvanceTableConfig<Member>, 'browseApi'> = {
  rowKey: 'user.id',
  columns: [
    {
      id: 'user',
      key: 'avatar',
      label: 'Team Members',
      render: (_, v) => <UserSimpleInfo user={v.user} />,
    },
    {
      id: 'type',
      label: 'Role',
      render: capitalize,
      minWidth: 50,
    },
    {
      id: 'status',
      label: 'Status',
      align: 'center',
      width: 60,
      render: (v) => (
        <StyledTag color={stateColor[v]} key={v}>
          {capitalize(v === MemberStatus.disable ? 'Disabled' : v)}
        </StyledTag>
      ),
    },
    {
      id: 'created',
      label: 'Joined',
      width: 120,
      render: (v) => <DateTime value={v} noTime />,
    },
  ],
  actions: [TeamMemberEditAction],
  filters: [],
  styles: {
    roundedHeader: true,
  },
};
