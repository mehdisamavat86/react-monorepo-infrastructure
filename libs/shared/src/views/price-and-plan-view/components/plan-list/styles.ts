import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)`
  padding: 0 7vw;
  justify-content: center;
  ${(p) => p.theme.breakpoints.down('lg')} {
    justify-content: flex-start;
  }
`;
