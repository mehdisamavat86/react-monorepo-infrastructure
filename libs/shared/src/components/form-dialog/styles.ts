import { styled } from '@mui/material/styles';
import { CustomDialog } from '../custom-dialog';
import { Form as BaseForm } from '../form';

export const Wrapper = styled(CustomDialog)``;

export const Form = styled(BaseForm)`
  padding-top: ${(p) => p.theme.spacing(1)};
`;
