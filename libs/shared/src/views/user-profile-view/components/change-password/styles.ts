import { FormDialog } from '@myapp/shared/components';
import { TextField as BaseTextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')``;

export const FormWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

export const TextField = styled(BaseTextField)``;

export const Dialog = styled(FormDialog)``;
