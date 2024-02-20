import { Accordion } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Accordion)`
  background: ${(p) => p.theme.palette.common.white};
  width: ${(p) => p.theme.spacing(70)};
  border-radius: ${(p) => p.theme.spacing(1.5)};
`;
