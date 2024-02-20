import { useTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { classnames } from '@myapp/shared/utils';
import { Dayjs } from 'dayjs';
import { memo, useMemo, useState } from 'react';
import { ClearButton } from './clear-button';
import * as Styled from './styles';
import type { DateRangePickerProps as Props } from './types';
import { getDateRangePickerValues } from './utils';

export const DateRangePicker = memo(
  ({ className, defaultValue, value, onChangeStart, onChangeEnd }: Props) => {
    const theme = useTheme();

    const [open, setOpen] = useState<number | boolean>(false);

    const valueDayjs = useMemo(() => {
      return getDateRangePickerValues(value);
    }, [value]);

    const handleChangeStart = (v: Dayjs | undefined) => {
      onChangeStart?.(v);
    };

    const handleChangeEnd = (v: Dayjs | undefined) => {
      onChangeEnd?.(v);
    };

    const clearStartButton = () =>
      ClearButton({ onClick: () => handleChangeStart(undefined) });

    const clearEndButton = () =>
      ClearButton({ onClick: () => handleChangeEnd(undefined) });

    const InputProps = useMemo(
      () => ({
        style: { paddingRight: theme.spacing(0.5) },
      }),
      [theme]
    );

    const InputLabelProps = useMemo(
      () => ({
        style: { fontSize: theme.typography.pxToRem(12) },
      }),
      [theme.typography]
    );

    const inputPropsStyle = useMemo(
      () => ({
        fontSize: theme.typography.pxToRem(12),
        paddingLeft: theme.spacing(1.5),
      }),
      [theme]
    );

    return (
      <Styled.Wrapper dateAdapter={AdapterDayjs}>
        <Styled.Content className={classnames('DateRangePicker', className)}>
          <Styled.DatePicker
            open={open === 1}
            onClose={() => setOpen(false)}
            slots={{
              openPickerButton: clearStartButton,
            }}
            slotProps={{
              textField: {
                size: 'small',
                inputProps: {
                  onClick: () => setOpen(1),
                  style: inputPropsStyle,
                },
                InputProps,
                InputLabelProps,
                placeholder: 'From',
              },
            }}
            value={valueDayjs[0]}
            onAccept={(v: unknown) => handleChangeStart(v as Dayjs)}
          />
          -
          <Styled.DatePicker
            open={open === 2}
            onClose={() => setOpen(false)}
            slots={{
              openPickerButton: clearEndButton,
            }}
            slotProps={{
              textField: {
                size: 'small',
                inputProps: {
                  onClick: () => setOpen(2),
                  style: inputPropsStyle,
                },
                InputProps,
                InputLabelProps,
                placeholder: 'To',
              },
            }}
            value={valueDayjs[1]}
            onAccept={(v: unknown) => handleChangeEnd(v as Dayjs)}
          />
        </Styled.Content>
      </Styled.Wrapper>
    );
  }
);
