import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(LoadingButton)`
  width: 120px;
  max-width: 100%;
  gap: ${(p) => p.theme.spacing(0.5)};
  text-transform: capitalize;
`;
