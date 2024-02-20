import { classnames } from '@myapp/shared/utils';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { NotificationNoContentProps as Props } from './types';

export const NotificationNoContent = memo(({ className }: Props) => {
  const theme = useTheme();
  return (
    <Styled.Wrapper
      className={classnames('NotificationNoContent', className)}
      sx={SX.root}
    >
      <Stack
        minHeight="176px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography sx={SX.title}>Nothing to See here</Typography>
        <Typography variant="body2">
          Youre all caught up with your notifications.
        </Typography>
      </Stack>
    </Styled.Wrapper>
  );
});

NotificationNoContent.displayName = 'NotificationNoContent';
