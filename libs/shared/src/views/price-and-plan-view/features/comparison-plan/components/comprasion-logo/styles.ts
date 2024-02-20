import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)`
  position: relative;
  width: 200px;
  height: 100px;
  margin-top: ${(p) => p.theme.spacing(5)};
`;
