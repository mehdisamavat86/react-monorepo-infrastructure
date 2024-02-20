import { Card as CardBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SnackbarContent } from 'notistack';

export const Wrapper = styled(SnackbarContent)``;

export const Card = styled(CardBase)`
  padding: ${(p) => p.theme.spacing(3)};
`;
