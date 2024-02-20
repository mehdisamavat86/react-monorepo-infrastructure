import { Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RowSelectorPopupWrapper } from './components/row-selector-popup-wrapper';

export const Wrapper = styled(RowSelectorPopupWrapper)``;

export const ContentWrapper = styled(Grid)`
  gap: ${(p) => p.theme.spacing(1)};
  flex-direction: column;
`;

export const ContentRow = styled(Grid)`
  gap: ${(p) => p.theme.spacing(1)};
  display: flex;
  align-items: center;
`;

export const OptionLabel = styled(Typography)`
  font-weight: ${(p) => p.theme.typography.fontWeightRegular};
  font-size: ${(p) => p.theme.typography.caption.fontSize};
  padding: ${(p) => p.theme.spacing(1)};
`;

export const OptionButton = styled(Button)`
  font-weight: ${(p) => p.theme.typography.fontWeightRegular};
  font-size: ${(p) => p.theme.typography.caption.fontSize};
`;

export const PopoverPaper = styled(Paper)`
  padding: 0;
`;
