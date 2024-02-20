import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)``;
export const Name = styled(Box)``;
export const Title = styled(Typography)`
  font-size: ${(p) => p.theme.typography.body2};
  padding-left: ${(p) => p.theme.spacing(2)};
  ${(p) => p.theme.breakpoints.down('lg')} {
    font-size: ${(p) => p.theme.typography.caption};
  }
`;

export const Item = styled(Stack)`
  font-size: ${(p) => p.theme.typography.body2};
  font-weight: 700;
  ${(p) => p.theme.breakpoints.down('lg')} {
    font-size: ${(p) => p.theme.typography.caption};
    font-weight: 700;
  }
`;
