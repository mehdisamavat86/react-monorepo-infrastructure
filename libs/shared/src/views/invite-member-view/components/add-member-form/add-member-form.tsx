import { SHARED_ROUTES } from '@myapp/shared/constants';
import { useNotify } from '@myapp/shared/hooks';
import { useRedirect } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { useUpdateWorkspace } from '@myapp/shared/workspace';
import { memo } from 'react';
import { useInviteMember } from '../../api/use-invite-member';
import { EMPTY_MEMBER_DATA } from '../../constants';
import { AddMemberFormContent } from './add-member-form-content';
import { schema } from './config';
import * as Styled from './styles';
import type { AddMemberFormData, AddMemberFormProps as Props } from './types';
import { prepareAddMemberData } from './utils';

export const AddMemberForm = memo(({ className }: Props) => {
  const notify = useNotify();
  const updateWorkspace = useUpdateWorkspace();
  const redirect = useRedirect();
  const api = useInviteMember();
  const handleSubmit = (data: AddMemberFormData) => {
    api.mutateAsync(prepareAddMemberData(data)).then((workspace) => {
      updateWorkspace(workspace);
      notify.success('Invited members added successfully');
      redirect(SHARED_ROUTES.teamManagement);
    });
  };

  return (
    <Styled.Wrapper
      className={classnames('AddMemberForm', className)}
      scheme={schema}
      loading={api.isLoading}
      defaultValues={{ members: [EMPTY_MEMBER_DATA] }}
      submitButtonProps={{ children: 'Invite' }}
      actions={[
        {
          children: 'Cancel',
          variant: 'outlined',
          onClick: () => redirect(SHARED_ROUTES.teamManagement),
        },
      ]}
      onSubmit={handleSubmit}
    >
      <AddMemberFormContent loading={api.isLoading} />
    </Styled.Wrapper>
  );
});

AddMemberForm.displayName = 'AddMemberForm';
