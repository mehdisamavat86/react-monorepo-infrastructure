import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)``;

export const PlanRemainingTimeUnit = styled(Typography)`
  font-weight: ${(p) => p.theme.typography.fontWeightBold};
`;

export const PlanRemainingTimeValue = styled(PlanRemainingTimeUnit)`
  cursor: default;
  :hover {
    color: ${(p) => p.theme.palette.primary.main};
  }
`;
