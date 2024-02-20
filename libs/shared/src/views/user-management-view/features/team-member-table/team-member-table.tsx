import { classnames, dateCompare } from '@myapp/shared/utils';
import { useWorkspace } from '@myapp/shared/workspace';
import { memo } from 'react';
import { config } from './config';
import * as Styled from './styles';
import type { TeamMemberTableProps as Props } from './types';

export const TeamMemberTable = memo(({ className }: Props) => {
  const members = useWorkspace()?.members;
  const browseApi = {
    data: members?.sort((a, b) => dateCompare(a.created, b.created, 'desc')),
  };

  return (
    <Styled.Wrapper
      className={classnames('TeamMemberTable', className)}
      config={{ ...config, browseApi }}
    />
  );
});

TeamMemberTable.displayName = 'TeamMemberTable';
