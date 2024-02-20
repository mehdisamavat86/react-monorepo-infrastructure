import { SHARED_ROUTES } from '@myapp/shared/constants';
import { classnames } from '@myapp/shared/utils';
import { Button } from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import type { AddMemberDialogProps as Props } from './types';

export const AddMemberDialog = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper
      className={classnames('AddMemberDialog', className)}
      to={SHARED_ROUTES.inviteMember}
    >
      <Button variant="contained" color="primary" size="medium">
        Invite Member
      </Button>
    </Styled.Wrapper>
  );
});

AddMemberDialog.displayName = 'AddMemberDialog';
