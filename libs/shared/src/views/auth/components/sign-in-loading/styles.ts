import { DetailedMessageCard } from '@myapp/shared/components';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(DetailedMessageCard)``;

export const Error = styled(Typography)`
  color: ${(p) => p.theme.palette.error.main};
`;
