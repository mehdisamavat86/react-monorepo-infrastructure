import { RHFTextField } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { Box, InputLabel } from '@mui/material';
import { createElement, memo } from 'react';
import type { BillingInformationInputProps as Props } from './types';

export const BillingInformationInput = memo(
  ({
    className,
    name,
    label,
    size = 'small',
    element = RHFTextField,
    extra,
  }: Props) => {
    return (
      <Box className={classnames('BillingInformationInput', className)}>
        <InputLabel shrink htmlFor={name}>
          {label}
        </InputLabel>
        {createElement(element, { ...extra, name, size })}
      </Box>
    );
  }
);

BillingInformationInput.displayName = 'BillingInformationInput';
