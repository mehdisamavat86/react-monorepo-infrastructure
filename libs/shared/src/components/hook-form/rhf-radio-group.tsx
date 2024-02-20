import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
    type RadioGroupProps,
} from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export type RHFRadioGroupProps = RadioGroupProps & {
  name: string;
  options: { label: string; value: any }[];
  label?: string;
  spacing?: number;
  helperText?: React.ReactNode;
  append?: ReactNode;
};

export default function RHFRadioGroup({
  className,
  row,
  name,
  label,
  options,
  append,
  spacing,
  helperText,
  ...other
}: RHFRadioGroupProps) {
  const { control } = useFormContext();

  const labelledby = label ? `${name}-${label}` : '';

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl
          className={classnames('RadioGroup', className)}
          component="fieldset"
        >
          {label && (
            <FormLabel
              component="legend"
              id={labelledby}
              sx={{
                typography: 'body2',
                color: 'text.primary',
                '&.Mui-focused': {
                  color: 'text.primary',
                },
              }}
            >
              {label}
            </FormLabel>
          )}

          <RadioGroup
            className="RadioGroupOptions"
            {...field}
            aria-labelledby={labelledby}
            row={row}
            {...other}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
                sx={{
                  '&:not(:last-of-type)': {
                    mb: spacing || 0,
                  },
                  ...(row && {
                    mr: 0,
                    '&:not(:last-of-type)': {
                      mr: spacing || 2,
                    },
                  }),
                }}
              />
            ))}

            {append}
          </RadioGroup>

          {(!!error || helperText) && (
            <FormHelperText error={!!error} sx={{ mx: 0 }}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
