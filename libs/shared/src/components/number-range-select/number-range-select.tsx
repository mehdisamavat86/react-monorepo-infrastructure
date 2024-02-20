import { classnames } from '@myapp/shared/utils';
import { MenuItemProps } from '@mui/material';
import { memo } from 'react';
import { NumberSingleSelect } from './components/number-single-select';
import * as Styled from './styles';
import * as SX from './sx';
import type { NumberRangeSelectProps as Props } from './types';

export const NumberRangeSelect = memo(
  ({
    className,
    icon,
    defaultValue,
    min,
    max,
    onChangeStart,
    onChangeEnd,
    options,
  }: Props) => {
    const handleChangeStart: MenuItemProps['onChange'] = (e) => {
      const value = e.currentTarget.getAttribute('data-value');
      if (value) onChangeStart?.(value);
    };

    const handleChangeEnd: MenuItemProps['onChange'] = (e) => {
      const value = e.currentTarget.getAttribute('data-value');
      if (value) onChangeEnd?.(value);
    };

    return (
      <Styled.Wrapper
        className={classnames('NumberRangeSelect', className)}
        sx={SX.root}
      >
        <NumberSingleSelect
          key="min"
          label="Min"
          defaultValue={defaultValue?.at(0)}
        >
          {options.map((option) => (
            <Styled.MenuItem
              onClick={handleChangeStart}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </Styled.MenuItem>
          ))}
        </NumberSingleSelect>
        -
        <NumberSingleSelect
          key="max"
          label="Max"
          defaultValue={defaultValue?.at(1)}
        >
          {options.map((option) => (
            <Styled.MenuItem
              onClick={handleChangeEnd}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </Styled.MenuItem>
          ))}
        </NumberSingleSelect>
      </Styled.Wrapper>
    );
  }
);

NumberRangeSelect.displayName = 'NumberRangeSelect';
