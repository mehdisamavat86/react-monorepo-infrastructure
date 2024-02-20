import {
  Icon,
  PopoverListButton,
  PopoverListButtonProps,
} from '@myapp/shared/components';
import { useNotify } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { useUpdateWorkspace } from '@myapp/shared/workspace';
import { useTheme } from '@mui/material/styles';
import { memo } from 'react';
import { useCancelTransferMutationApi } from '../../api/use-cancel-transfer-mutation-api';
import { useResendTransferMutationApi } from '../../api/use-resend-transfer-mutation-api';
import { useTransferringOwnershipStore } from '../../store';
import { TRANSFER_ACCOUNT_OWNERSHIP_ITEMS } from './config';
import * as Styled from './styles';
import {
  ChangeEmailActionType as ActionType,
  type ChangeEmailActionsProps as Props,
} from './types';

export const ChangeEmailActions = memo(({ className }: Props) => {
  const theme = useTheme();
  const notify = useNotify();
  const toggleTransferring = useTransferringOwnershipStore.useToggle();
  const updateWorkspace = useUpdateWorkspace();
  const cancelApi = useCancelTransferMutationApi();
  const resendApi = useResendTransferMutationApi();

  const onChange: PopoverListButtonProps['onSelect'] = (e, s) => {
    s.showLoading();
    setTimeout(() => {
      if (e.key === ActionType.resend) {
        resendApi.mutateAsync({}).then((response) => {
          updateWorkspace(response);
          notify.info('We are trying to resend the email');
        });
      } else {
        cancelApi.mutateAsync({}).then((response) => {
          updateWorkspace(response);
          toggleTransferring();
          notify.info('Transferring ownership canceled');
        });
      }
      s.onClose();
    }, 1000);
  };

  return (
    <Styled.Wrapper className={classnames('ChangeEmailActions', className)}>
      <PopoverListButton
        icon={<Icon name="rotate-right" size={22} />}
        items={TRANSFER_ACCOUNT_OWNERSHIP_ITEMS}
        closeAfterSelect={false}
        itemSx={{ minWidth: '140px' }}
        buttonProps={{
          color: 'primary',
          variant: 'outlined',
          square: true,
          size: 'large',
          // TODO add border to IconButton
          sx: { border: `1px solid ${theme.palette.divider}`, width: '66px' },
        }}
        onSelect={onChange}
      />
    </Styled.Wrapper>
  );
});

ChangeEmailActions.displayName = 'ChangeEmailActions';
