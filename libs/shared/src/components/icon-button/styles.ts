import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(IconButton)`
  &.round {
    border-radius: ${(p) => p.theme.shape.borderRadius}px;
  }
`;
