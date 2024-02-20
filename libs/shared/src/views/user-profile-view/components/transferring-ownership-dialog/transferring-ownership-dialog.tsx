import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { useTransferringOwnershipStore } from '../../store';
import * as Styled from './styles';
import type { TransferringOwnershipDialogProps as Props } from './types';

export const TransferringOwnershipDialog = memo(
  ({ className, state, workspace }: Props) => {
    const toggleTransferring = useTransferringOwnershipStore.useToggle();

    return (
      <Styled.Wrapper
        className={classnames('TransferringOwnershipDialog', className)}
        state={state}
        title="Transferring ownership"
        titleSx={{
          justifyContent: 'center',
          fontSize: '24px',
          mb: 2,
        }}
        contentSx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
        actionsSx={{ justifyContent: 'center' }}
        okTitle={false}
        cancelTitle="Got it!"
        cancelProps={{
          variant: 'contained',
          color: 'primary',
        }}
        onCancel={toggleTransferring}
      >
        <Styled.Title>
          Until{' '}
          <Styled.Email>
            {workspace?.transfer && workspace.transfer.user.username}
          </Styled.Email>{' '}
          confirms this request,the ownership of this dashboard remains
          unchanged.
        </Styled.Title>
        <Styled.Description>
          The new account owner will be able to manage all account settings
          after confirmation.
        </Styled.Description>
      </Styled.Wrapper>
    );
  }
);

TransferringOwnershipDialog.displayName = 'TransferringOwnershipDialog';
