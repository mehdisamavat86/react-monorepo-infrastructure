import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as LinkBase } from 'react-router-dom';
import * as SidebarStyled from '../../styles';

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(2)};
`;

export const SettingWrapper = styled(LinkBase)`
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.spacing(1)};
  text-decoration: none;
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(1)};
  border-radius: ${(p) => p.theme.spacing(1)};
  width: 100%;

  &.active,
  &:hover {
    background-color: ${(p) => p.theme.palette.primary[50]};
    color: ${(p) => p.theme.palette.primary.main};
    > span,
    > svg {
      color: ${(p) => p.theme.palette.primary.main};
    }
  }
`;

export const Link = styled(LinkBase)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: ${(p) => p.theme.spacing(1)};
`;

export const ButtonWrapper = styled(SidebarStyled.ButtonWrapper)`
  padding: 0;
`;

export const Button = styled(SidebarStyled.Button)`
  &.open {
    padding: ${(p) => p.theme.spacing(2)};
  }
`;
