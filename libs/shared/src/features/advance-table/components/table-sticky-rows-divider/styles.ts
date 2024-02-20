import { TableCell, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(TableRow)`
  border-bottom: 1px dashed ${(p) => p.theme.palette.grey[400]};
  background: ${(p) =>
    p.theme.palette.mode === 'dark'
      ? p.theme.palette.background.neutral
      : p.theme.palette.grey[200]};
`;

export const Cell = styled(TableCell)`
  z-index: 10;
  position: relative;
  border-bottom: none !important;
  padding: ${(p) => p.theme.spacing(1)};
`;

export const DividerMessage = styled(Typography)`
  padding: ${(p) => p.theme.spacing(0.5)};
  background-color: ${(p) =>
    p.theme.palette.mode === 'dark'
      ? p.theme.palette.primary.darker
      : p.theme.palette.primary.lighter};
  margin-inline-start: ${(p) => p.theme.spacing(1)};
`;
