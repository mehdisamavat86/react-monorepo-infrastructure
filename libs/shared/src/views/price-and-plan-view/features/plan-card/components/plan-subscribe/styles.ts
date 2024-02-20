import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)``;

export const SubButton = styled(Button)`
  width: 100%;
  font-size: ${(p) => p.theme.typography.body1};
  font-weight: 700;
  padding: ${(p) => p.theme.spacing(1)};
`;
