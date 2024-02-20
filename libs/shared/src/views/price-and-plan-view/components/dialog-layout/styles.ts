import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  width: 100%;
`;

export const DefaultHeader = styled(Stack)`
  position: relative;
  svg {
    background: ${(p) => p.theme.palette.common.white};
  }
`;

export const Content = styled(Box)`
  padding: ${(p) => p.theme.spacing(3.8)};
`;
