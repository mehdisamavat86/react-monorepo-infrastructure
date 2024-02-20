import {
  Box,
  MenuItem as MenuItemBase,
  Paper as PaperBase,
  Select as SelectBase,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1.5)};
`;

export const Paper = styled(PaperBase)`
  background-color: red;
`;

export const MenuItem = styled(MenuItemBase)`
  font-size: ${(p) => p.theme.typography.caption.fontSize};

  &:hover,
  &.Mui-selected {
    color: ${(p) => p.theme.palette.primary.main};
    background-color: ${(p) => p.theme.palette.primary.lighter};
  }
`;
