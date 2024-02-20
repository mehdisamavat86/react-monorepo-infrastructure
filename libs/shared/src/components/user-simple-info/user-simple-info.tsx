import { classnames, userGetFullName } from '@myapp/shared/utils';
import { Avatar, Box } from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import type { UserSimpleInfoProps as Props } from './types';

export const UserSimpleInfo = memo(({ className, user }: Props) => {
  return (
    <Styled.Wrapper className={classnames('UserSimpleInfo', className)}>
      <Avatar src={user.attributes?.avatar || ''} />
      <Box display="flex" flexDirection="column" gap={0} flex="1">
        <span>{userGetFullName(user)}</span>
        <Styled.Email>{user.username}</Styled.Email>
      </Box>
    </Styled.Wrapper>
  );
});

UserSimpleInfo.displayName = 'UserSimpleInfo';
