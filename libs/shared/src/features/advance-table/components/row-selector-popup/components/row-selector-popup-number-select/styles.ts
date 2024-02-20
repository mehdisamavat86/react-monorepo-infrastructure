import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import {
  ContentRow as ContentRowBase,
  OptionLabel as OptionLabelBase,
} from '../../styles';

export const Wrapper = styled(ContentRowBase)``;

export const ContentRow = styled(ContentRowBase)``;

export const OptionLabel = styled(OptionLabelBase)``;

export const TextInput = styled(TextField)`
  width: ${(p) => p.theme.spacing(10)};

  > .MuiInputBase-root {
    height: ${(p) => p.theme.spacing(4)};
  }
  input {
    text-align: center;
  }
`;
