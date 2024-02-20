import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  background: transparent;
  padding: 0 7vw;
`;

export const BackButton = styled(Button)`
  background: ${(p) => p.theme.palette.common.white};
  border: 1px solid ${(p) => p.theme.palette.grey[400]};
`;

export const Title = styled('div')`
  font-size: ${(p) => p.theme.typography.body2};
  font-weight: 700;
  background-color: ${(p) => p.theme.palette.primary.contrastText};
  color: ${(p) => p.theme.palette.primary.main};
  padding: ${(p) => p.theme.spacing(1)};
  border-radius: ${(p) => p.theme.spacing(1)};
`;
