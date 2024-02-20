import { useAuthContext } from '@myapp/shared/auth';
import { APP_NAME } from '@myapp/shared/constants';
import { useUnMount } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { Button, Typography } from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import type { DeleteWorkspaceSuccessProps as Props } from './types';

export const DeleteWorkspaceSuccess = memo(({ className }: Props) => {
  const { logOut } = useAuthContext();

  useUnMount(() => logOut());

  return (
    <Styled.Wrapper className={classnames('DeleteWorkspaceSuccess', className)}>
      <Styled.Content>
        <Styled.Information>
          <Styled.Icon name="check-circle-outline" size={90} color="primary" />

          <Typography component="h3">We are sorry to see you leave!</Typography>
          <Typography component="p">
            Your {APP_NAME} account and all your data have been deleted. You are
            always welcome to join<b> {APP_NAME} </b> again!
          </Typography>
          <Button
            color="primary"
            size="large"
            variant="soft"
            sx={{ width: '120px' }}
            onClick={() => logOut()}
          >
            Got it
          </Button>
        </Styled.Information>

        <Styled.Img src="/assets/images/delete-success.svg" alt="loading" />
      </Styled.Content>
    </Styled.Wrapper>
  );
});

DeleteWorkspaceSuccess.displayName = 'DeleteWorkspaceSuccess';
