import type { CustomDialogActionEvent } from '@myapp/shared/components';
import { SHARED_ROUTES } from '@myapp/shared/constants';
import { MemberStatus } from '@myapp/shared/definition';
import { useBoolean, useNotify } from '@myapp/shared/hooks';
import { useRedirect } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { useUpdateWorkspace } from '@myapp/shared/workspace';
import { memo } from 'react';
import { useDisableMember } from '../../api/use-disable-member';
import * as Styled from './styles';
import type { ChangeMemberStatusDialogProps as Props } from './types';
import { prepareDisableMemberData } from './utils';

export const ChangeMemberStatusDialog = memo(
  ({ className, item, onClose }: Props) => {
    const notify = useNotify();
    const loading = useBoolean();
    const redirect = useRedirect();
    const title =
      item.status === MemberStatus.Active ? 'Disable Member' : 'Enable Member';
    const api = useDisableMember(item.user.id);
    const updateWorkspace = useUpdateWorkspace();

    const handleSubmit: CustomDialogActionEvent = (e) => {
      loading.onTrue();
      api.mutateAsync(prepareDisableMemberData(item)).then((workspace) => {
        updateWorkspace(workspace);
        e.toggle();
        notify.success(`Member status changed successfully`);
        redirect(SHARED_ROUTES.teamManagement);
      });
    };

    return (
      <Styled.Wrapper
        className={classnames('ChangeMemberStatusDialog', className)}
        loading={loading.value}
        defaultOpen
        title={title}
        okTitle="Yes, confirm"
        cancelTitle="Cancel"
        okProps={{
          variant: 'contained',
          size: 'medium',
          color: 'error',
        }}
        onClose={onClose}
        onOk={handleSubmit}
      >
        <Styled.Description>
          Are you sure you want to {title.split(' ')[0]}
          <b> {item.user.username} </b>
          from your team?
        </Styled.Description>
      </Styled.Wrapper>
    );
  }
);

ChangeMemberStatusDialog.displayName = 'ChangeMemberStatusDialog';
