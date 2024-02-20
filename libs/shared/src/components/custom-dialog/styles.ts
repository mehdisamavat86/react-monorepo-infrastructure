import {
  Box,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Dialog)``;

export const Header = styled(DialogTitle)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px dashed transparent;
  padding-bottom: ${(p) => p.theme.spacing(2)};
`;

export const Content = styled(Box)``;

export const Actions = styled(DialogActions)`
  border-top: 1px solid transparent;
  padding-top: ${(p) => p.theme.spacing(2)};
  gap: ${(p) => p.theme.spacing(1)};

  > * {
    margin: 0 !important;
  }
`;

export const SubTitle = styled(Typography)`
  font-size: 14px;
`;
