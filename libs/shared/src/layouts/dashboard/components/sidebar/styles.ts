import { IconButton } from '@myapp/shared/components';
import { HEADER, SIDENAV } from '@myapp/shared/layouts/config-layout';
import { Box, Drawer, Paper as PaperBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Drawer)`
  position: absolute;
`;

export const LogoWrapper = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: ${HEADER.TOP}px;
  gap: ${(p) => p.theme.spacing(1)};
  border-bottom: ${(p) => `solid 1px ${p.theme.palette.grey[200]}`};
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(1.5)};
`;

export const Logo = styled('img')`
  width: ${(p) => p.theme.spacing(5)};
`;

export const Brand = styled('img')`
  height: ${(p) => p.theme.spacing(2.5)};
  align-self: center;
`;

export const ButtonWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: ${(p) => p.theme.spacing(1)};
  gap: ${(p) => p.theme.spacing(1)};
  cursor: pointer;
  &:hover {
    background-color: ${(p) => p.theme.palette.primary.superlight};
    & > span,
    svg {
      color: ${(p) => p.theme.palette.primary.main};
    }
  }
`;

export const Button = styled(IconButton)`
  display: flex;
  height: ${(p) => p.theme.spacing(5)};
  width: ${(p) => p.theme.spacing(5)};
  border: solid 2px ${(p) => p.theme.palette.grey[200]};
  &.active {
    border-color: ${(p) => p.theme.palette.primary.main};
  }
`;

export const Paper = styled(PaperBase)`
  background-color: ${(p) => p.theme.palette.common.white};
`;

export const MenuContainer = styled(Box)`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: ${(p) => p.theme.palette.common.white};
  align-items: center;
  overflow-x: hidden;
  border-right: ${(p) =>
    `1px solid ${
      p.theme.palette.mode === 'dark'
        ? p.theme.palette.grey[900]
        : p.theme.palette.primary[100]
    }`};

  &.open {
    width: ${SIDENAV.W_EXPANDED}px;
    transition: ${(p) =>
      p.theme.transitions.create(['width'], {
        easing: p.theme.transitions.easing.easeOut,
        duration: p.theme.transitions.duration.enteringScreen,
      })};
  }
  &.close {
    width: ${SIDENAV.W}px;
    transition: ${(p) =>
      p.theme.transitions.create(['width'], {
        easing: p.theme.transitions.easing.easeOut,
        duration: p.theme.transitions.duration.leavingScreen,
      })};
  }
`;
