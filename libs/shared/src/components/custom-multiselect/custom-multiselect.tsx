import {
  Autocomplete,
  Chip,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { Option, CustomMultiselectProps as Props } from './types';
import { Icon } from '../icon';

export const CustomMultiselect = memo(
  ({
    className,
    options,
    chipSX,
    deleteIconSx,
    deleteIconSize,
    optionSx,
    chipIcon,
    chipIconSx,
    inputSx,
  }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('CustomMultiselect', className)}
        sx={SX.root}
      >
        <Autocomplete
          multiple
          id="tags-outlined"
          limitTags={2}
          options={options}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} sx={inputSx} />}
          renderTags={(value: readonly Option[], getTagProps) =>
            value.map((option: Option, index: number) => (
              <Chip
                sx={chipSX || SX.chip}
                variant="outlined"
                label={
                  <Stack direction="row" alignItems="center">
                    {chipIcon && <Icon name={chipIcon} sxx={chipIconSx} />}
                    {option.title}
                  </Stack>
                }
                key={option.title}
                onDelete={getTagProps({ index }).onDelete}
                tabIndex={getTagProps({ index }).tabIndex}
                deleteIcon={
                  <Icon
                    name="close"
                    size={deleteIconSize || 18}
                    sxx={deleteIconSx || SX.deleteIcon}
                  />
                }
              />
            ))
          }
          renderOption={(props, option, state, ownerState) => (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={10}
              component="li"
              sx={optionSx || SX.optionItem}
              // {...props.}
              onClick={props.onClick}
              value={option.value}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                gap={1}
              >
                {option.icon && <Icon name={option.icon || 'fingerPrint'} />}
                <Typography>{option.title}</Typography>
              </Stack>
              <Typography>{option.count}</Typography>
            </Stack>
          )}
        />
      </Styled.Wrapper>
    );
  }
);

CustomMultiselect.displayName = 'CustomMultiselect';
