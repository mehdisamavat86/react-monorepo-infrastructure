import { RouterLinkButton } from '@myapp/shared/router';
import { styled } from '@mui/material/styles';
import { GlobalAlertBar } from '../global-alert-bar';

export const Wrapper = styled(GlobalAlertBar)`
  padding: ${(p) => p.theme.spacing(1.5)};
`;

export const CheckBilling = styled(RouterLinkButton)`
  background: ${(p) =>
    p.theme.palette.mode === 'dark'
      ? p.theme.palette.background.neutral
      : p.theme.palette.common.white};
  font-size: ${(p) => p.theme.typography.caption};
`;
