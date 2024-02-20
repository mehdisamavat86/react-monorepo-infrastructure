import { Stack, Typography } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { CommentProps as Props } from './types';

export const Comment = memo(({ className, comment }: Props) => {
  return (
    <Styled.Wrapper className={classnames('Comment', className)} sx={SX.root}>
      <Styled.AvatarImage src={comment?.userImage} />
      <Stack sx={SX.information(comment?.reverse)}>
        <Typography sx={SX.description}>{comment?.description}</Typography>
        <Typography sx={SX.name(comment?.reverse)}>{comment?.name}</Typography>
        <Typography sx={SX.position(comment?.reverse)}>
          {comment?.position}
        </Typography>
      </Stack>
    </Styled.Wrapper>
  );
});

Comment.displayName = 'Comment';
