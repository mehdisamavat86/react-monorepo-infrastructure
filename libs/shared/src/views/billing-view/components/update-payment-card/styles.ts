import { FormDialog, RHFTextField } from '@myapp/shared/components';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(FormDialog)``;

export const Input = styled(RHFTextField)`
  border-style: none;

  & fieldset {
    border-style: none !important;
  }
`;
