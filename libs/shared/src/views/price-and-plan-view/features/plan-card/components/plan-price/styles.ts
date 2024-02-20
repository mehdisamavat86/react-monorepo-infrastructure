import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  border-bottom: 1px solid ${(p) => p.theme.palette.primary.lighter};
  padding-bottom: ${(p) => p.theme.spacing(1.25)};
  padding-top: ${(p) => p.theme.spacing(2.5)};
`;
