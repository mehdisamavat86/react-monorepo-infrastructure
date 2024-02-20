import { ButtonProps } from '@mui/material';
import { Prettify } from '@myapp/shared/definition';
import { DropDownProps } from '../drop-down/types';

export interface DropDownCheckboxProps
  extends Omit<DropDownProps, 'renderItem'> {
  className?: string;
  submitProps?: Prettify<
    Omit<ButtonProps, 'onClick' | 'disabled'> & {
      onSubmit?: DropDownProps['onChange'];
    }
  >;
}
