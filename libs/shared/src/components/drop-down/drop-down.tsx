import { Box, MenuItem } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { isArray, isNil, merge } from 'lodash-es';
import { memo, useState } from 'react';
import * as Styled from './styles';
import type {
    DropDownProps as Props,
    DropDownRenderItem as RenderItem,
} from './types';

const defaultRender: RenderItem = (x) => x;

export const DropDown = memo(
  ({
    className,
    options,
    value,
    showEmptyOption,
    placeholder,
    disabledItems,
    onChange: defaultOnchange,
    itemSx,
    multiple,
    children,
    append,
    renderItem,
    renderValue,
    ...props
  }: Props) => {
    const render: RenderItem = renderItem ?? defaultRender;
    const [innerState, setInnerState] = useState(value);
    const onChange = defaultOnchange ?? setInnerState;
    const currentState = defaultOnchange ? value : innerState;

    return (
      <Styled.Wrapper
        className={classnames('DropDown', className)}
        value={currentState}
        displayEmpty
        multiple={multiple}
        {...props}
        renderValue={(v) => {
          if (v === '') v = undefined;
          const val = isArray(v) ? v : [v].filter(Boolean);
          if (renderValue) return renderValue(val);
          if (isNil(v))
            return <Styled.Placeholder>{placeholder}</Styled.Placeholder>;
          const labels = options
            .filter((x) => val.includes(x.value ?? x.key))
            ?.map((i) => i.label);
          if (!multiple) return labels;
          return labels.join(', ');
        }}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {showEmptyOption && (
          <MenuItem sx={itemSx} value="">
            {placeholder}
          </MenuItem>
        )}

        {!children
          ? options?.map((x) => (
              <MenuItem
                sx={itemSx}
                key={x.key}
                value={(x.value ?? x.key) as string}
                disabled={disabledItems?.includes(x.key)}
              >
                {render(x.label ?? x.value ?? x.key, x, currentState)}
              </MenuItem>
            ))
          : children}

        {append && (
          <Box sx={merge({ py: 0.5 }, itemSx)}>{append?.(currentState)}</Box>
        )}
      </Styled.Wrapper>
    );
  }
);

DropDown.displayName = 'DropDown';
