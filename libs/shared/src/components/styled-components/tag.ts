import { styled } from '@mui/material/styles';
import Label from '../label/label';

export const StyledTag = styled(Label)<{ fullWidth?: boolean }>`
  text-transform: capitalize;
  width: ${(p) => (p.fullWidth ? '100%' : 'initial')};
  border: 1px solid;
  border-radius: ${(p) => p.theme.spacing(4)};
`;
