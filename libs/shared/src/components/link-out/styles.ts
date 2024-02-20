import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Button)`
  &.MuiButton-text {
    padding: 0;
    border-radius: 0;

    :hover {
      background: transparent;
    }
  }
`;
