import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  width: fit-content;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const Email = styled(Typography)`
  color: ${(p) => p.theme.palette.grey[500]};
  font-size: 14px;
`;

export const Name = styled(Typography)`
  font-size: 14px;
`;
