import { Box, Card, Typography } from '@mui/material';
import { lighten, styled } from '@mui/material/styles';

export const Wrapper = styled(Card)`
  background-color: ${(p) => p.theme.palette.background.paper};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid ${(p) => p.theme.palette.grey[400]};
  &.no-shadow {
    box-shadow: none;
  }
`;

export const Header = styled(Box)`
  padding: ${(p) => p.theme.spacing(2)};
  flex: 0;
`;

export const Title = styled(Typography)`
  display: flex;
  justify-content: space-between;
`;

export const SubTitle = styled(Typography)``;

export const Content = styled(Box)`
  padding: ${(p) => p.theme.spacing(2)};
  height: 100%;
  position: relative;
  flex-grow: 1;

  > * {
    flex: none;
  }

  &.gradient {
    background: radial-gradient(
      circle,
      ${(p) => lighten(p.theme.palette.primary.main, 0.8)} 8%,
      transparent 48%
    );
  }
`;
