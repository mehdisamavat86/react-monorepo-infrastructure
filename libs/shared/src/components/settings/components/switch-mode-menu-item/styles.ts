import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(3)};
  width: 100%;
`;

export const Text = styled(Typography)`
  font-size: ${(p) => p.theme.typography.body2};
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.common.white
      : theme.palette.common.black};
`;
