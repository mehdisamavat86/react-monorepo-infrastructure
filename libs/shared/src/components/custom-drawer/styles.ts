import { Box, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '../icon';
import { BorderedCard } from '../styled-components';

export const Wrapper = styled(Drawer)`
  .MuiPaper-root {
    display: flex;
    flex-direction: column;
    gap: ${(p) => p.theme.spacing(2)};
    padding-top: ${(p) => p.theme.spacing(2)};
    padding-left: ${(p) => p.theme.spacing(2)};
    padding-right: ${(p) => p.theme.spacing(2)};
  }
`;

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(p) => p.theme.spacing(1)};
  padding: 0 0 ${(p) => p.theme.spacing(2)} 0;
`;

export const HeaderIcon = styled(Icon)`
  height: ${(p) => p.theme.spacing(3)};
  width: ${(p) => p.theme.spacing(3)};
  cursor: pointer;
`;

export const Content = styled(BorderedCard)``;
