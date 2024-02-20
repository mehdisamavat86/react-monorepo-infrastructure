import { Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Alert)`
  .MuiAlert-action {
    padding: ${(p) => p.theme.spacing(1)} 0 0 ${(p) => p.theme.spacing(0.5)};
  }
`;
