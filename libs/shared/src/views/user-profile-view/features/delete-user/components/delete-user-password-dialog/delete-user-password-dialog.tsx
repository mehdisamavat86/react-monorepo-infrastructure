import { useAuthContext } from '@myapp/shared/auth';
import {
  ClosableAlert,
  FormDialogSubmitHandler,
  Icon,
  Password,
} from '@myapp/shared/components';
import { useNotify } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { useUserCheckCredentialMutationApi } from '../../../../hooks/use-user-check-credential-mutation-api';
import config from './config';
import * as Styled from './styles';
import type { DeleteUserPasswordDialogProps as Props } from './types';

export const DeleteUserPasswordDialog = memo(
  ({ className, onSubmit }: Props) => {
    const { user } = useAuthContext();
    const api = useUserCheckCredentialMutationApi();
    const notify = useNotify();

    const handleSubmit: FormDialogSubmitHandler = (data, e) => {
      e.startProgress();
      api.mutateAsync(data).then((res) => {
        if (res.valid) {
          e.toggle();
          onSubmit(data.password);
        } else {
          e.endProgress();
          notify.error("Your password doesn't match");
        }
      });
    };

    return (
      <Styled.Wrapper
        className={classnames('DeleteUserPasswordDialog', className)}
        {...config}
        uncontrolledElement={
          <Styled.DeleteButton variant="soft" color="error">
            <span>Delete Owner Account</span> <Icon name="trash" />
          </Styled.DeleteButton>
        }
        onSubmit={handleSubmit}
      >
        <ClosableAlert severity="error">
          Before you DELETE your account:
          <Styled.List>
            <li>If you want to change your email, you can do it here.</li>
            <li>
              Account deletion is final. There will be no way to restore your
              account.
            </li>
            <li>You will get logged- out from all your devices.</li>
          </Styled.List>
        </ClosableAlert>

        <Styled.Title>
          Are you sure you want to delete this account?
        </Styled.Title>

        <Styled.TextField
          fullWidth
          name="email"
          label="Owner Account"
          defaultValue={user?.email || 'no-mail'}
          variant="filled"
          InputProps={{ readOnly: true }}
        />

        <Styled.Title>Enter your password to confirm</Styled.Title>

        <Password name="password" label="Current Password" />
      </Styled.Wrapper>
    );
  }
);

DeleteUserPasswordDialog.displayName = 'DeleteUserPasswordDialog';
