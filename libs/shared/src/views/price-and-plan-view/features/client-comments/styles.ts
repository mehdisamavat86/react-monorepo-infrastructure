import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)`
  ${(p) => p.theme.breakpoints.up('lg')} {
  }
  position: relative;
  padding: ${(p) => p.theme.spacing(8)} 1vw;
  border-bottom: 2px solid ${(p) => p.theme.palette.primary.lighter};
`;

export const TitleWrapper = styled(Box)`
  ${(p) => p.theme.breakpoints.down('lg')} {
    transform: translateY(-10vw);
  }
`;
