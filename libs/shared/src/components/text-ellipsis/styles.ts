import { Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  height: 1.5em;
  white-space: pre;

  &.capitalize {
    text-transform: capitalize;
  }
`;

export const StyledTooltip = styled(Tooltip)`
  .MuiTooltip-tooltip {
    background: rgba(101, 102, 110, 0.95) !important;
  }
  &.MuiTooltip-tooltip {
    background: rgba(101, 102, 110, 0.95) !important;
  }
`;
