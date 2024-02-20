import { Box, Toolbar as ToolbarBase, styled } from '@mui/material';

export const Toolbar = styled(ToolbarBase)`
  padding: 0 !important;
`;

export const LogoWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 ${(p) => p.theme.spacing(4)};
  background-color: white;
  background: url('/assets/images/dashboard/header-circles.svg'), white;
  background-repeat: no-repeat;
  background-position: ${(p) => p.theme.spacing(-2)};
`;
