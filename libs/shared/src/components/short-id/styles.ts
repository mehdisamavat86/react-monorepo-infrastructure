import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Typography)`
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(0.5)};
`;
