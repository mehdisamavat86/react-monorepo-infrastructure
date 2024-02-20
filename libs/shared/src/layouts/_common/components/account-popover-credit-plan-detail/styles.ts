import { Icon } from '@myapp/shared/components';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PlanRemainingTimeInfoIcon = styled(Icon)`
  :hover {
    color: ${(p) => p.theme.palette.primary.main};
  }
`;
