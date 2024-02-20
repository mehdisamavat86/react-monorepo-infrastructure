import { ConfirmDialog } from '@myapp/shared/components';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(ConfirmDialog)``;

export const Title = styled(Typography)``;

export const Description = styled(Typography)``;

export const Email = styled(Typography)`
  color: ${(p) => p.theme.palette.text.primary};
  text-decoration: underline;
  display: inline-block;
  font-weight: 700;
`;
