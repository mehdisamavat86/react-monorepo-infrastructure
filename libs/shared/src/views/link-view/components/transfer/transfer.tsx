import { AUTH_LOGIN_URL } from '@myapp/shared/auth';
import { FormProps, Password } from '@myapp/shared/components';
import { useParams, useRedirect, useSearchParams } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { YupFormData } from '@myapp/shared/utils/yup';
import { Button, Typography } from '@mui/material';
import { memo } from 'react';
import { useTransferLinkMutationApi } from '../../api/use-transfer-link-mutation-api';
import { schema } from './config';
import * as Styled from './styles';
import {
  TransferLinkUrlParams,
  TransferType,
  type TransferProps as Props,
} from './types';

export const Transfer = memo(({ className }: Props) => {
  const redirect = useRedirect();
  const params = useSearchParams<TransferLinkUrlParams>();
  const { id } = useParams();
  const isOwner = params.type === TransferType.Transfer;
  const api = useTransferLinkMutationApi(id!);

  const handleSubmit: FormProps['onSubmit'] = (
    data: YupFormData<typeof schema>
  ) => {
    api
      .mutateAsync({
        captcha: '123456',
        user: {
          username: params.username,
          firstName: params.firstname,
          lastName: params.lastname,
        },
        password: data.password,
      })
      .then(() => {
        window.location.href = AUTH_LOGIN_URL;
      });
  };

  return (
    <Styled.Wrapper
      className={classnames('PasswordTransfer', className)}
      title={
        <>
          <Typography variant="h4">Hi {params.username},</Typography>
          <Typography variant="h4">
            Set a password as a {isOwner ? 'new owner' : 'new member'}{' '}
          </Typography>
        </>
      }
      titleProps={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Styled.Form
        scheme={schema}
        submitButtonProps={{
          fullWidth: true,
          size: 'large',
          children: 'Set a password',
        }}
        loading={false /* TODO read loading from api */}
        onSubmit={handleSubmit}
      >
        <Button
          fullWidth
          disabled
          variant="contained"
          size="large"
          sx={{ justifyContent: 'flex-start' }}
        >
          {params.username}
        </Button>

        <Password name="password" label="Password" showHint />
        <Password name="confirmPassword" label="Confirm Password" />
      </Styled.Form>
    </Styled.Wrapper>
  );
});

Transfer.displayName = 'Transfer';
