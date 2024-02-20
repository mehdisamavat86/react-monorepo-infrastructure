import { ConfirmDialog } from '@myapp/shared/components';
import { FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(ConfirmDialog)``;

export const Reason = styled('div')`
  > .MuiFormControl-root {
    width: 100%;
  }
`;

export const Item = styled(FormControlLabel)`
  margin: 0;
`;
