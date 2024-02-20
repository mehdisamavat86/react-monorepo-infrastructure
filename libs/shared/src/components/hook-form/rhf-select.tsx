import {
    Box,
    Checkbox,
    Chip,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    TextField,
    type SelectProps,
    type TextFieldProps,
} from '@mui/material';
import type { SxStyle } from '@myapp/shared/theme';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Icon, IconName } from '../icon';

type RHFSelectProps = TextFieldProps & {
  name: string;
  label?: string;
  native?: boolean;
  icon?: IconName;
  iconSx?: SxStyle;
  maxHeight?: boolean | number;
  children: React.ReactNode;
  PaperPropsSx?: SxStyle;
  defaultValue?: string;
};

export function RHFSelect({
  name,
  native,
  icon,
  label,
  iconSx,
  maxHeight = 220,
  helperText,
  children,
  PaperPropsSx,
  defaultValue,
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={{ width: '100%' }}>
          <Box sx={{ position: 'relative' }}>
            {icon && (
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ position: 'absolute', top: 0, bottom: 0, pl: 1 }}
              >
                <Icon name={icon} sxx={iconSx} />
              </Stack>
            )}
            {!field.value && (
              <InputLabel sx={{ pl: icon ? 3 : 0 }}>{label}</InputLabel>
            )}

            <TextField
              {...field}
              select
              fullWidth
              SelectProps={{
                native,
                MenuProps: {
                  PaperProps: {
                    sx: {
                      ...(!native && {
                        maxHeight:
                          typeof maxHeight === 'number' ? maxHeight : 'unset',
                      }),
                      ...PaperPropsSx,
                    },
                  },
                },
                sx: {
                  pl: 2,
                  ...(icon && {
                    '.MuiInputBase-input': {
                      pl: 3,
                    },
                  }),
                  textTransform: 'capitalize',
                },
              }}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...other}
            >
              {children}
            </TextField>
          </Box>
        </FormControl>
      )}
    />
  );
}

type RHFMultiSelectProps = SelectProps & {
  name: string;
  label?: string;
  icon?: IconName;
  iconSx?: SxStyle;
  chip?: boolean;
  checkbox?: boolean;
  placeholder?: string;
  helperText?: React.ReactNode;
  options: {
    label: string;
    value: string;
  }[];
};

export function RHFMultiSelect({
  name,
  chip,
  label,
  icon,
  iconSx,
  options,
  checkbox,
  placeholder,
  helperText,
  sx,
  ...other
}: RHFMultiSelectProps) {
  const { control } = useFormContext();

  const renderValues = (selectedIds: string[]) => {
    const selectedItems = options.filter((item) =>
      selectedIds.includes(item.value)
    );

    if (!selectedItems.length && placeholder) {
      return (
        <Box component="em" sx={{ color: 'text.disabled' }}>
          {placeholder}
        </Box>
      );
    }

    if (chip) {
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selectedItems.map((item) => (
            <Chip key={item.value} size="small" label={item.label} />
          ))}
        </Box>
      );
    }

    return selectedItems.map((item) => item.label).join(', ');
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={sx}>
          <Box sx={{ position: 'relative' }}>
            {icon && (
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ position: 'absolute', top: 0, bottom: 0, pl: 1 }}
              >
                <Icon name={icon} sxx={iconSx} />
              </Stack>
            )}
            {label && <InputLabel id={name}> {label} </InputLabel>}

            <Select
              {...field}
              multiple
              displayEmpty={!!placeholder}
              labelId={name}
              input={<OutlinedInput fullWidth label={label} error={!!error} />}
              renderValue={renderValues}
              {...other}
            >
              {placeholder && (
                <MenuItem disabled value="">
                  <em> {placeholder} </em>
                </MenuItem>
              )}

              {options.map((option) => {
                const selected = field?.value?.includes(option.value);

                return (
                  <MenuItem key={option.value} value={option.value}>
                    {checkbox && (
                      <Checkbox size="small" disableRipple checked={selected} />
                    )}

                    {option.label}
                  </MenuItem>
                );
              })}
            </Select>

            {(!!error || helperText) && (
              <FormHelperText error={!!error}>
                {error ? error?.message : helperText}
              </FormHelperText>
            )}
          </Box>
        </FormControl>
      )}
    />
  );
}
