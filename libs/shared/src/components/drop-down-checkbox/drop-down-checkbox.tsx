import { Button, Checkbox } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { merge } from 'lodash-es';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { DropDownCheckboxProps as Props } from './types';

export const DropDownCheckbox = memo(
  ({ className, sx, submitProps, ...props }: Props) => {
    // TODO fix unhandled close effect if props.onChange exist
    return (
      <Styled.Wrapper
        className={classnames('DropDownCheckbox', className)}
        {...props}
        sx={merge(SX.root, sx)}
        renderItem={(label, x, selected) => (
          <>
            <Checkbox checked={selected.indexOf(x.value) > -1} />
            {label}
          </>
        )}
        append={(selected) =>
          !!submitProps && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              {...submitProps}
              disabled={!selected?.length}
              onClick={() => submitProps?.onSubmit?.(selected)}
              children={submitProps?.children || 'Submit'}
            />
          )
        }
      />
    );
  }
);

DropDownCheckbox.displayName = 'DropDownCheckbox';
