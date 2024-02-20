import {
  FormDialogSubmitHandler,
  Icon,
  RHFTextField,
} from '@myapp/shared/components';
import { useNotify } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { InputAdornment, TextField } from '@mui/material';
import { memo } from 'react';
import config from './config';
import * as Styled from './styles';
import type { UpdatePaymentCardProps as Props } from './types';

export const UpdatePaymentCard = memo(({ className }: Props) => {
  const notify = useNotify();

  const handleSubmit: FormDialogSubmitHandler = (data, e) => {
    e.startProgress();
    setTimeout(() => {
      e.toggle();
    }, 1000);
    notify.success('Card added successfully');
  };

  return (
    <Styled.Wrapper
      className={classnames('UpdatePaymentCard', className)}
      {...config}
      onSubmit={handleSubmit}
    >
      <RHFTextField name="name" label="Cardholder name" />

      <TextField
        fullWidth
        name="credit"
        placeholder="Card number"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Styled.Input name="date" placeholder="MM/YY" />
              <Styled.Input name="cvc" placeholder="CVC" />
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <Icon name="payment" />
            </InputAdornment>
          ),
        }}
      />
    </Styled.Wrapper>
  );
});

UpdatePaymentCard.displayName = 'UpdatePaymentCard';
