import { FormDialogSubmitHandler } from '@myapp/shared/components';
import { SHARED_ROUTES } from '@myapp/shared/constants';
import { useNotify } from '@myapp/shared/hooks';
import { useRedirect } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { useUpdateWorkspace } from '@myapp/shared/workspace';
import { memo } from 'react';
import { useEditMember } from '../../api/use-edit-member';
import { TeamMemberForm } from '../team-member-form';
import { config, scheme } from './config';
import * as Styled from './styles';
import type { EditMemberDialogProps as Props } from './types';
import { prepareEditMemberData } from './utils';

export const EditMemberDialog = memo(({ className, item, onClose }: Props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const api = useEditMember(item.user.id);
  const updateWorkspace = useUpdateWorkspace();

  const handleSubmit: FormDialogSubmitHandler = (data, e) => {
    e.startProgress();

    api.mutateAsync(prepareEditMemberData(data)).then((workspace) => {
      updateWorkspace(workspace);
      e.toggle();
      notify.success('Member updated successfully');
      redirect(SHARED_ROUTES.teamManagement);
    });
  };

  return (
    <Styled.Wrapper
      className={classnames('EditMemberDialog', className)}
      {...config}
      scheme={scheme}
      defaultOpen
      defaultValues={item}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <TeamMemberForm />
    </Styled.Wrapper>
  );
});

EditMemberDialog.displayName = 'EditMemberDialog';
