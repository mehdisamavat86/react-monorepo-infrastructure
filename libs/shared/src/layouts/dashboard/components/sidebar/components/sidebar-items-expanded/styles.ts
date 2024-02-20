import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(2)};
  overflow-x: hidden;
  height: 100%;
`;
