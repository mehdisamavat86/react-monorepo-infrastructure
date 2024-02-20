import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.spacing(0.25)};
  height: ${(p) => p.theme.spacing(4)};
`;

export const Text = styled(Typography)`
  font-weight: 900;
  display: inline-flex;
  align-items: center;
`;
