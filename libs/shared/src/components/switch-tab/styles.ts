import { RouterLinkButton } from '@myapp/shared/router';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)`
  flex-direction: row;
  gap: ${(p) => p.theme.spacing(1)};
`;

export const Button = styled(RouterLinkButton)`
  gap: ${(p) => p.theme.spacing(1)};
  border-width: 2px !important;

  :not(.active) {
    color: ${(p) => p.theme.palette.grey[400]};
  }
`;
