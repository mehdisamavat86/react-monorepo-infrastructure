import {
  ClosableAlert,
  FormDialogSubmitHandler,
  Password,
} from '@myapp/shared/components';
import { useNotify } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { LoadingButton } from '@mui/lab';
import { memo } from 'react';
import { useUserChangePasswordMutationApi } from '../../hooks/use-user-change-password-mutation-api';
import config, { icon } from './config';
import * as Styled from './styles';
import type { ChangePasswordProps as Props } from './types';

export const ChangePassword = memo(({ className }: Props) => {
  const notify = useNotify();
  const api = useUserChangePasswordMutationApi();
  const handleSubmit: FormDialogSubmitHandler = (data, e) => {
    const { password, currentPassword } = data;
    e.startProgress();
    api
      .mutateAsync({ password, currentPassword })
      .then(() => {
        notify.success('Password successfully changed');
        e.toggle();
      })
      .catch(e.endProgress);
  };

  return (
    <Styled.Wrapper className={classnames('ChangePassword', className)}>
      <Styled.FormWrapper>
        <Styled.TextField
          fullWidth
          name="password"
          label="Password"
          defaultValue="*****************"
          variant="filled"
          InputProps={{
            readOnly: true,
          }}
        />
        <Styled.Dialog
          {...config}
          uncontrolledElement={
            <LoadingButton variant="outlined">{icon}</LoadingButton>
          }
          onSubmit={handleSubmit}
        >
          <ClosableAlert severity="info">
            Enter a new password below to change your password.
          </ClosableAlert>

          <Password name="currentPassword" label="Current Password" />

          <Password name="password" label="New Password" showHint />

          <Password name="confirmPassword" label="Confirm New Password" />
        </Styled.Dialog>
      </Styled.FormWrapper>
    </Styled.Wrapper>
  );
});

ChangePassword.displayName = 'ChangePassword';
