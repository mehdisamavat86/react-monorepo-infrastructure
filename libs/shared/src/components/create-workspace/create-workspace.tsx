import { Button, Stack, Typography } from '@mui/material';
import { useNotify } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import {
    useCreateWorkspaceMutationApi,
    useUpdateWorkspace,
} from '@myapp/shared/workspace';
import { memo } from 'react';
import { FormDialog, FormDialogProps } from '../form-dialog';
import { RHFTextField } from '../hook-form';
import { config } from './config';
import * as Styled from './styles';
import type {
    CreateWorkspaceFormData as FormData,
    CreateWorkspaceProps as Props,
} from './types';

export const CreateWorkspace = memo(({ className }: Props) => {
  const api = useCreateWorkspaceMutationApi();
  const notify = useNotify();
  const updateWorkspace = useUpdateWorkspace();

  const handleCreateWorkspace: FormDialogProps['onSubmit'] = (
    data: FormData,
    e
  ) => {
    e.startProgress();
    api
      .mutateAsync(data)
      .then((workspace) => {
        updateWorkspace(workspace);
        notify.info('Workspace created successfully');
        e.toggle();
      })
      .catch(e.startProgress);
  };

  return (
    <Styled.Wrapper
      className={classnames('CreateWorkspace', className)}
      flexDirection="column"
      gap={4}
    >
      <Stack flexDirection="column">
        <Typography color="primary" variant="h5">
          You have no workspaces yet
        </Typography>

        <Typography color="text" variant="body1" textAlign="center">
          would you like to create a new one?
        </Typography>
      </Stack>

      <FormDialog
        uncontrolledElement={
          <Button color="primary" size="large" variant="soft">
            Create a new workspace
          </Button>
        }
        {...config}
        onSubmit={handleCreateWorkspace}
      >
        <RHFTextField name="name" label="Workspace Name" />
      </FormDialog>
    </Styled.Wrapper>
  );
});

CreateWorkspace.displayName = 'CreateWorkspace';
