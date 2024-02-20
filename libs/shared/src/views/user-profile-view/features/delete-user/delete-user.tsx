import { useAuthContext } from '@myapp/shared/auth';
import { SHARED_ROUTES } from '@myapp/shared/constants';
import { useBoolean } from '@myapp/shared/hooks';
import { useRedirect } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { useIsOwner, useWorkspaceMember } from '@myapp/shared/workspace';
import { capitalize } from 'lodash-es';
import { memo, useState } from 'react';
import { useUserDeleteOwnerAccountMutationApi } from '../../hooks/use-user-delete-owner-account-mutation-api';
import {
  DeleteUserConfirmDialogProps as DeleteDialogProps,
  DeleteUserConfirmDialog,
} from './components/delete-user-confirm-dialog';
import { DeleteUserPasswordDialog } from './components/delete-user-password-dialog';
import * as Styled from './styles';
import type { DeleteUserProps as Props } from './types';

export const DeleteUser = memo(({ className }: Props) => {
  const { user } = useAuthContext();
  const member = useWorkspaceMember();
  const confirmDialog = useBoolean();
  const isOwner = useIsOwner();
  const redirect = useRedirect();
  const [password, setPassword] = useState('');
  const api = useUserDeleteOwnerAccountMutationApi();
  const onDeleteHandler: DeleteDialogProps['onSubmit'] = (description) => {
    api.mutateAsync({ description, password }).then(() => {
      redirect(SHARED_ROUTES.workspaceDeleted);
    });
  };

  return (
    <Styled.Wrapper className={classnames('DeleteUser', className)}>
      <Styled.TextField
        label={`${capitalize(member?.type)} Account`}
        defaultValue={user?.email || 'no-mail'}
        variant="filled"
        InputProps={{ readOnly: true }}
      />

      {isOwner && (
        <DeleteUserPasswordDialog
          onSubmit={(data: string) => {
            confirmDialog.onTrue();
            setPassword(data);
          }}
        />
      )}

      <DeleteUserConfirmDialog
        state={confirmDialog}
        onSubmit={onDeleteHandler}
      />
    </Styled.Wrapper>
  );
});

DeleteUser.displayName = 'DeleteUser';
