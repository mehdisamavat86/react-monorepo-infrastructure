import {
  PATH_AFTER_LOGIN,
  useGetToken,
  useSetAuthTokenEffect,
} from '@myapp/shared/auth';
import { useMount } from '@myapp/shared/hooks';
import { useRedirect } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { CircularProgress } from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import type { SignInLoadingProps as Props } from './types';

export const SignInLoading = memo(({ className, code }: Props) => {
  const redirect = useRedirect();
  const { isError, mutateAsync: getTokenHandler, data } = useGetToken();

  useMount(() => {
    getTokenHandler({
      grant_type: 'authorization_code',
      code,
    });
  });

  useSetAuthTokenEffect(data, () => {
    redirect(PATH_AFTER_LOGIN);
  });

  return (
    <Styled.Wrapper
      className={classnames('SignInLoading', className)}
      title="sign in"
      description="we are trying to sign you in"
    >
      {isError ? (
        <Styled.Error>An error has happernd</Styled.Error>
      ) : (
        <CircularProgress />
      )}
    </Styled.Wrapper>
  );
});

SignInLoading.displayName = 'SignInLoading';
