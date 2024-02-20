import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  height: ${(p) => p.theme.spacing(118)};
  border-radius: ${(p) => p.theme.spacing(1.25)};
  padding: ${(p) => p.theme.spacing(4)} ${(p) => p.theme.spacing(2.5)}
    ${(p) => p.theme.spacing(2.5)} ${(p) => p.theme.spacing(2.5)};
`;
