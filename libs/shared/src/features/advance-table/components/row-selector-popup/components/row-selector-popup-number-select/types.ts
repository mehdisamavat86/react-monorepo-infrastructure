import { TextFieldProps } from '@mui/material/TextField';
import { RefObject } from 'react';

export interface RowSelectorPopupNumberSelectProps {
  className?: string;
  handleChange?: TextFieldProps['onChange'];
  value?: number;
  max?: number;
  inputRef?: RefObject<HTMLInputElement>;
  extra?: number;
}
