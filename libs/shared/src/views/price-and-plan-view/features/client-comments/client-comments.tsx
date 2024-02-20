import { Box, Stack, Typography } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ClientCommentsProps as Props } from './types';
import { Comment } from './components/comment';

export const ClientComments = memo(({ className }: Props) => {
  const comments = [
    {
      name: 'Jane Burg',
      userImage: '/assets/images/avatar4.png',
      description:
        'Boosted sales by 50%? That`s Jane`s success story with our service. Join in!',
      position: 'Direct of Growth, Canvas',
    },
    {
      name: 'Emma Manson',
      userImage: '/assets/images/avatar3.png',
      description: 'Join Emma who got a 30% revenue boost with our product.',
      position: 'Senior Executive Director',
    },
    {
      name: 'Mark Jennings',
      userImage: '/assets/images/avatar2.png',
      description:
        'With our tool, Mark`s team doubled their productivity. Yours could too!',
      position: 'Social Media Specialist',
      reverse: true,
    },
    {
      name: 'Lisa Terrones',
      userImage: '/assets/images/avatar1.png',
      description:
        'Hootsuite has helped us reach more people organically, faster - thanks.',
      position: 'VP, Marketing & Public ',
      reverse: true,
    },
  ];

  return (
    <Styled.Wrapper
      className={classnames('ClientComments', className)}
      sx={SX.root}
      gap={8}
    >
      <Box sx={SX.bg1} />
      <Box sx={SX.bg2} />

      <Stack sx={SX.commentWrapper} gap={8}>
        <Stack direction="row" justifyContent="space-between" sx={SX.firstRow}>
          <Comment key={comments[0].name} comment={comments[0]} />
          <Styled.TitleWrapper sx={SX.titleWrapper}>
            <Typography sx={SX.text1}>Hear What Our Clients Say</Typography>
            <Typography sx={SX.text2}>
              We`ve helped these brands scale their sales, without the stress
            </Typography>
          </Styled.TitleWrapper>
          <Comment key={comments[2].name} comment={comments[2]} />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Comment key={comments[1].name} comment={comments[1]} />
          <Stack direction="row" gap={5}>
            <img src="/assets/images/aryaka-logo.svg" alt="" />
            <img src="/assets/images/aryaka-logo.svg" alt="" />
            <img src="/assets/images/aryaka-logo.svg" alt="" />
            <img src="/assets/images/aryaka-logo.svg" alt="" />
          </Stack>
          <Comment key={comments[3].name} comment={comments[3]} />
        </Stack>
      </Stack>
    </Styled.Wrapper>
  );
});

ClientComments.displayName = 'ClientComments';
