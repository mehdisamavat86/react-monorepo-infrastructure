import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)``;
export const NickName = styled(Typography)`
  font-size: ${(p) => p.theme.typography.body2};
  ${(p) => p.theme.breakpoints.down('lg')} {
    font-size: ${(p) => p.theme.typography.caption};
  }
`;
export const Price = styled(Typography)`
  font-size: ${(p) => p.theme.typography.body2};
  font-weight: 700;
  ${(p) => p.theme.breakpoints.down('lg')} {
    font-size: ${(p) => p.theme.typography.caption};
    font-weight: 700;
  }
`;
