import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)`
  background: ${(p) => p.theme.palette.common.white};
  border-radius: ${(p) => p.theme.spacing(12)};
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(1.5)};
  border: 1px solid ${(p) => p.theme.palette.grey[400]};
  margin-top: ${(p) => p.theme.spacing(2)};
`;
