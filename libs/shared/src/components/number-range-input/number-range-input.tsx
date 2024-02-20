import { classnames, toNumber } from '@myapp/shared/utils';
import { InputProps as MuiInputProps } from '@mui/material';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { Icon } from '../icon';
import { ErrorMessage } from './config';
import * as Styled from './styles';
import { InputError, type NumberRangeInputProps as Props } from './types';

export const NumberRangeInput = memo(
  ({
    className,
    icon,
    max,
    min,
    defaultValue,
    value,
    onChangeStart,
    onChangeEnd,
    error,
  }: Props) => {
    const [v1, setV1] = useState(value?.at(0));
    const [v2, setV2] = useState(value?.at(1));

    useEffect(() => {
      if (typeof value?.at(0) === 'undefined') setV1('');
      if (typeof value?.at(1) === 'undefined') setV2('');
    }, [value]);

    const handleChangeStart: MuiInputProps['onChange'] = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setV1(e.target.value);
      if (!getInputError(e.target.value, v2)) onChangeStart?.(e.target.value);
    };

    const handleChangeEnd: MuiInputProps['onChange'] = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setV2(e.target.value);
      if (!getInputError(v1, e.target.value)) onChangeEnd?.(e.target.value);
    };

    const InputProps = {
      startAdornment: icon && <Icon name={icon} size={20} />,
    };

    const getInputError = (value1?: string, value2?: string) => {
      const minimum = value1?.length ? toNumber(value1) : undefined;
      const maximum = value2?.length ? toNumber(value2) : undefined;

      if (!minimum || typeof maximum === 'undefined') return false;

      if (minimum < 0 || maximum < 0) return InputError.NEGATIVE_NUMBER;
      if (minimum > maximum) return InputError.INVALID_COMBINATION;
      return false;
    };

    const inputError = useMemo(() => {
      return getInputError(v1, v2);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [v1, v2]);

    const inputProps = { min: 0, max };
    return (
      <Styled.Wrapper className={classnames('NumberRangeInput', className)}>
        <Styled.InputBox>
          <Styled.Input
            type="number"
            placeholder="Min"
            size="small"
            inputProps={inputProps}
            InputProps={InputProps}
            onChange={handleChangeStart}
            value={v1}
            error={error}
          />
          -
          <Styled.Input
            type="number"
            placeholder="Max"
            size="small"
            inputProps={inputProps}
            InputProps={InputProps}
            onChange={handleChangeEnd}
            value={v2}
            error={error}
          />
        </Styled.InputBox>
        {!!inputError && (
          <Styled.MessageBox>
            <Styled.ErrorMessage color="error">
              {ErrorMessage[inputError]}
            </Styled.ErrorMessage>
          </Styled.MessageBox>
        )}
      </Styled.Wrapper>
    );
  }
);

NumberRangeInput.displayName = 'NumberRangeInput';
