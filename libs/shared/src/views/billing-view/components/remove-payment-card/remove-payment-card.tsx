import { ConfirmDialogProps } from '@myapp/shared/components';
import { useBoolean, useNotify } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { Button } from '@mui/material';
import { memo } from 'react';
import { useDeletePaymentCardMutationApi } from '../../api/use-delete-payment-card-mutation-api';
import { PaymentCardInfo } from '../payment-card-info';
import * as Styled from './styles';
import type { RemovePaymentCardProps as Props } from './types';

export const RemovePaymentCard = memo(({ className, item }: Props) => {
  const notify = useNotify();
  const loading = useBoolean();

  const api = useDeletePaymentCardMutationApi(item.id);
  const handleRemove: ConfirmDialogProps['onOk'] = (e) => {
    loading.onTrue();
    api.mutateAsync({}).then(() => {
      notify.success('Card Successfully removed');
      loading.onFalse();
      e.toggle();
    });
  };

  return (
    <Styled.Wrapper
      className={classnames('RemovePaymentCard', className)}
      loading={loading.value}
      uncontrolledElement={
        <Button variant="soft" color="error">
          Delete
        </Button>
      }
      title="Delete Card"
      subTitle="Are you sure you want to delete this card?"
      headerSx={{ gap: 2, width: 'min(430px, 100vw)' }}
      contentSx={{ py: 0 }}
      okTitle="Yes, Delete"
      okProps={{
        variant: 'contained',
        color: 'error',
        loading: api.isLoading,
      }}
      onOk={handleRemove}
    >
      <Styled.CardInfo>
        <PaymentCardInfo item={item.card} />
      </Styled.CardInfo>
    </Styled.Wrapper>
  );
});

RemovePaymentCard.displayName = 'RemovePaymentCard';
