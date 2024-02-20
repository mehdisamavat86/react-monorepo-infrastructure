import {
  MenuItem as MenuItemBase,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const MenuItem = styled(MenuItemBase)`
  padding: ${(p) => p.theme.spacing(0.5)} ${(p) => p.theme.spacing(2)};
  border-radius: 0;
  gap: ${(p) => p.theme.spacing(2)};
  :hover {
    color: ${(p) => p.theme.palette.primary.main};
  }

  &.active {
    background-color: ${(p) => p.theme.palette.primary.main};
    color: ${(p) => p.theme.palette.common.white};
    font-weight: ${(p) => p.theme.typography.fontWeightBold};
  }
`;

export const MenuItemTitle = styled(Typography)`
  display: inline-block;
  padding: ${(p) => p.theme.spacing(1.5)} ${(p) => p.theme.spacing(2)};
`;

export const MenuLink = styled(Link)`
  display: block;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${(p) => p.theme.spacing(0.5)} ${(p) => p.theme.spacing(2)};
  font-size: ${(p) => p.theme.typography.body2};
  gap: ${(p) => p.theme.spacing(2)};
  color: ${(p) => p.theme.palette.common.black};
  :hover {
    color: ${(p) => p.theme.palette.primary.main};
    background-color: ${(p) => p.theme.palette.grey[200]};
  }
`;

export const SearchInput = styled(TextField)`
  padding: ${(p) => p.theme.spacing(1.5)} ${(p) => p.theme.spacing(2)};
  width: 100%;
  & > .MuiInputBase-root:hover,
  .MuiInputBase-root:focus-visible {
    & > .MuiOutlinedInput-notchedOutline {
      border-color: ${(p) => p.theme.palette.primary[400]};
    }
  }
`;
