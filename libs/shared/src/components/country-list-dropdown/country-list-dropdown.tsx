import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { COUNTRY_NAMES } from './countries-data';
import * as Styled from './styles';
import type { CountryListDropdownProps as Props } from './types';

export const CountryListDropdown = memo(
  ({
    className,
    placeholder,
    label = 'Country',
    name,
    noLabel,
    ...props
  }: Props) => {
    // TODO Sayad country is not selected on first load
    return (
      <Styled.Wrapper
        className={classnames('CountryListDropdown', className)}
        name={name || 'country'}
        label={noLabel ? undefined : label}
        placeholder={label}
        options={COUNTRY_NAMES}
        getOptionLabel={(option: any) => option}
        isOptionEqualToValue={(option, value) => option === value}
        {...props}
      />
    );
  }
);

CountryListDropdown.displayName = 'CountryListDropdown';
