import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)`
  width: ${(p) => p.theme.spacing(50)};
  min-width: ${(p) => p.theme.spacing(37.5)};
`;

export const PlanHeading = styled(Box)`
  background: ${(p) => p.theme.palette.common.white};
  border: 1px solid ${(p) => p.theme.palette.grey[400]};
  text-align: center;
  border-radius: ${(p) => p.theme.spacing(1.25)};
  padding: ${(p) => p.theme.spacing(1.25)} ${(p) => p.theme.spacing(1.25)};
`;
