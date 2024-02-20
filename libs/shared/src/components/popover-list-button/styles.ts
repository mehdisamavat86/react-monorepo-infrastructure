import { MenuItem as BaseMenuItem, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)``;

export const MenuItem = styled(BaseMenuItem)`
  min-width: 130px;

  &.divider {
    :not(:last-child) {
      :after {
        display: block;
        content: '';
        width: 100%;
        border-bottom: ${(p) => `1px solid ${p.theme.palette.divider}`};
        position: absolute;
        left: 0;
        bottom: -${(p) => p.theme.spacing(0.25)};
      }
    }
  }
`;
