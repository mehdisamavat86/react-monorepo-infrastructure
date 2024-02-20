import { classnames } from '@myapp/shared/utils';
import { SelectProps } from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { NumberSingleSelectProps as Props } from './types';

export const NumberSingleSelect = memo(
  ({ className, children, label, ...props }: Props) => {
    const MenuProps: SelectProps['MenuProps'] = {
      PaperProps: {
        sx: {
          backgroundColor: 'white',
          backgroundImage: 'none',
          borderColor: (t) => t.palette.primary.main,
        },
      },
      MenuListProps: {},
      PopoverClasses: {},
      classes: {},
    };

    return (
      <Styled.Wrapper variant="outlined" fullWidth size="small">
        <Styled.InputLabel shrink size="small" id={label?.toString()}>
          {label}
        </Styled.InputLabel>
        <Styled.Select
          labelId={label?.toString()}
          id={`select-${label}`}
          className={classnames('NumberSingleSelect', className)}
          sx={SX.root}
          size="small"
          MenuProps={MenuProps}
          variant="outlined"
          inputProps={{ sx: SX.inputProps }}
          {...props}
        >
          {children}
        </Styled.Select>
      </Styled.Wrapper>
    );
  }
);

NumberSingleSelect.displayName = 'NumberSingleSelect';
