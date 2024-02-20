import { useAuthContext } from '@myapp/shared/auth';
import {
  ClosableAlert,
  FormDialogSubmitHandler,
  Password,
  RHFTextField,
} from '@myapp/shared/components';
import { MemberStatus } from '@myapp/shared/definition';
import { useBoolean, useNotify } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { useUpdateWorkspace, useWorkspace } from '@myapp/shared/workspace';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { memo } from 'react';
import { useTransferMutationApi } from '../../api/use-transfer-mutation-api';
import { ChangeEmailActions } from '../change-email-actions';
import { TransferringOwnershipDialog } from '../transferring-ownership-dialog';
import config, { icon } from './config';
import * as Styled from './styles';
import type { ChangeEmailProps as Props } from './types';

export const ChangeEmail = memo(({ className }: Props) => {
  const confirmDialog = useBoolean();
  const notify = useNotify();
  const { user } = useAuthContext();
  const workspace = useWorkspace();
  const updateWorkspace = useUpdateWorkspace();
  const isPending =
    workspace?.transfer && workspace.transfer.status === MemberStatus.Pending;

  const api = useTransferMutationApi();

  const handleSubmit: FormDialogSubmitHandler = (data, e) => {
    e.startProgress();

    api
      .mutateAsync(data)
      .then((response) => {
        updateWorkspace(response);
        e.toggle();
        confirmDialog.onTrue();
      })
      .catch((error) => {
        notify.error(error);
        e.endProgress();
      });
  };
  return (
    <Styled.Wrapper className={classnames('ChangeEmail', className)}>
      <Styled.FormWrapper>
        <Styled.TextField
          className={classnames({ isPending })}
          fullWidth
          name="email"
          label="Email"
          value={workspace?.transfer?.user?.username || user?.email}
          variant="filled"
        />

        {isPending ? (
          <ChangeEmailActions />
        ) : (
          <Styled.Dialog
            {...config}
            uncontrolledElement={
              <LoadingButton variant="outlined">{icon}</LoadingButton>
            }
            onSubmit={handleSubmit}
          >
            <ClosableAlert severity="info">
              By changing your email, you are transferring ownership of this
              dashboard to this user.
            </ClosableAlert>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="transfer.user.firstName" label="First Name" />
              <RHFTextField name="transfer.user.lastName" label="Last Name" />
            </Box>

            <RHFTextField
              name="transfer.user.username"
              label="New Email Address"
            />

            <Password name="password" label="Current Password" />
          </Styled.Dialog>
        )}
      </Styled.FormWrapper>

      <TransferringOwnershipDialog
        state={confirmDialog}
        workspace={workspace}
      />
    </Styled.Wrapper>
  );
});

ChangeEmail.displayName = 'ChangeEmail';
