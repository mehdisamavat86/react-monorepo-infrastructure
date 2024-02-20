import { TextField, type TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export type RHFTextFieldProps = TextFieldProps & {
  name: string;
};

export default function RHFTextField({
  name,
  helperText,
  type,
  ...other
}: RHFTextFieldProps) {
  const { control } = useFormContext();

  const hiddenProps: TextFieldProps =
    type === 'hidden'
      ? {
          variant: 'standard',
          sx: {
            '& .MuiInputBase-root::before, & .MuiInputBase-root::after, & input':
              {
                display: 'none',
              },
          },
        }
      : {};

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          value={
            type === 'number' && field.value === 0 ? '' : field.value ?? ''
          }
          onChange={(event) => {
            if (type === 'number') {
              if (event.target.value !== '') {
                let val = Number(event.target.value);
                if (other.inputProps?.min && val < other.inputProps.min)
                  val = other.inputProps.min;
                if (other.inputProps?.max && val > other.inputProps.max)
                  val = other.inputProps.max;
                field.onChange(val);
              } else field.onChange(null);
            } else {
              field.onChange(event.target.value);
            }
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
          {...hiddenProps}
        />
      )}
    />
  );
}
