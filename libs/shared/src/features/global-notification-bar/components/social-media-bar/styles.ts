import { alpha, styled } from '@mui/material/styles';
import { GlobalAlertBar } from '../global-alert-bar';

export const Wrapper = styled(GlobalAlertBar)`
  background-color: ${(p) => p.theme.palette.primary[50]};
  .MuiAlert-icon {
    background: ${(p) =>
      p.theme.palette.mode === 'dark'
        ? p.theme.palette.background.neutral
        : alpha(p.theme.palette.primary.main, 0.1)};
  }
`;
