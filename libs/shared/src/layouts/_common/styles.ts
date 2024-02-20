import {
  Avatar as AvatarBase,
  Box,
  MenuItem as MenuItemBase,
  Typography,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const AccountPopoverTitleWrapper = styled(Box)`
  align-self: flex-start;
  padding: ${(p) => p.theme.spacing(0.5)} ${(p) => p.theme.spacing(2.5)};
  background-color: ${(p) =>
    p.theme.palette.mode === 'light'
      ? p.theme.palette.grey[200]
      : p.theme.palette.background.paper};
  border-radius: ${(p) => p.theme.spacing(1)};
  gap: ${(p) => p.theme.spacing(2)};
  width: 100%;
`;

export const AccountPopoverEmailText = styled(Typography)`
  font-size: ${(p) => p.theme.typography.caption.fontSize};
  color: ${(p) =>
    p.theme.palette.mode === 'light'
      ? p.theme.palette.grey[700]
      : p.theme.palette.grey[200]};
  display: flex;
  gap: ${(p) => p.theme.spacing(0.5)};
`;

export const AccountPopoverUserTypeText = styled(Typography)`
  font-size: inherit;
  color: inherit;
  text-transform: capitalize;
`;

export const AccountPopoverBorderedBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(p) => p.theme.spacing(1)};
  border: solid 1px
    ${(p) =>
      p.theme.palette.mode === 'light'
        ? p.theme.palette.primary.lighter
        : p.theme.palette.grey[700]};
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(2)};
`;

export const MenuItem = styled(MenuItemBase)`
  padding: ${(p) => p.theme.spacing(0.5)} ${(p) => p.theme.spacing(2)};
  border-radius: 0;
  :hover {
    color: ${(p) => p.theme.palette.primary.main};
  }
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
    background-color: ${(p) => p.theme.palette.grey[400]};
  }
`;

export const MenuItemTitle = styled(Typography)`
  display: inline-block;
  padding: ${(p) => p.theme.spacing(1.5)} ${(p) => p.theme.spacing(2)};
`;

export const MenuItemLogout = styled(MenuItemBase)`
  padding: ${(p) => p.theme.spacing(0.5)} ${(p) => p.theme.spacing(2)};
  border-radius: 0;
  color: ${(p) => p.theme.palette.error.main};
  font-weight: ${(p) => p.theme.typography.fontWeightBold};
`;

export const Avatar = styled(AvatarBase)`
  border-radius: ${(p) => p.theme.spacing(1)};
  border: solid 1px ${(p) => p.theme.palette.primary[200]}!important;
  &:hover {
    border: solid 1px ${(p) => p.theme.palette.primary.main}!important;
  }
`;
