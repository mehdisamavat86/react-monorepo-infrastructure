import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  height: ${(p) => p.theme.spacing(14.5)};
  position: relative;
  border-bottom: 1px solid ${(p) => p.theme.palette.primary.lighter};
  padding-bottom: ${(p) => p.theme.spacing(1.25)};
`;

export const Current = styled(Box)`
  position: absolute;
  right: -20px;
`;
export const Badge = styled(Box)`
  padding: ${(p) => p.theme.spacing(1, 2, 1, 4)};
  border-radius: ${(p) => p.theme.spacing(3)} 0 0 ${(p) => p.theme.spacing(3)};
`;

export const Next = styled(Box)``;
