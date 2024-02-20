import { Badge, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: ${(p) => p.theme.spacing(1)} 0;
  cursor: pointer;
  margin-top: ${(p) => p.theme.spacing(1)};
  border-top: 1px dashed ${(p) => p.theme.palette.primary.lighter};
`;

export const MainItemTitle = styled(Typography)`
  display: flex;
  height: ${(p) => p.theme.spacing(2.5)};
  line-height: 1.5;
  background-color: ${(p) => p.theme.palette.primary.superlight};
  border-radius: ${(p) => p.theme.spacing(1)};
  padding: ${(p) => p.theme.spacing(0.25)} ${(p) => p.theme.spacing(1)};
  align-items: center;
`;

export const MainItemDescription = styled(Typography)`
  display: flex;
  height: ${(p) => p.theme.spacing(2.5)};
  line-height: 2;
`;

export const Dot = styled(Badge)`
  transform: scale(1) translate(-100%, 50%);
  width: 6px;
  height: 6px;
  & > .MuiBadge-badge {
    min-width: 6px;
    height: 6px;
  }
`;
