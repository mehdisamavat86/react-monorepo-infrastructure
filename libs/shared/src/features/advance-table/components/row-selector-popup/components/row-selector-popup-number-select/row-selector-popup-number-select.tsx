import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { RowSelectorPopupNumberSelectProps as Props } from './types';

export const RowSelectorPopupNumberSelect = memo(
  ({ className, inputRef, value, max, extra }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('RowSelectorPopupNumberSelect', className)}
        sx={SX.root}
        item
        xs={12}
      >
        <Styled.ContentRow item xs={8}>
          <Styled.OptionLabel>
            Select number of results {!!extra && `(plus ${extra} lookalike)`}
          </Styled.OptionLabel>
        </Styled.ContentRow>
        <Styled.ContentRow item xs={4} sx={SX.inputContentRow}>
          <Styled.TextInput
            type="number"
            variant="outlined"
            size="small"
            defaultValue={value}
            inputProps={{ min: 1, max }}
            onClick={(e) => e.stopPropagation()}
            inputRef={inputRef}
          />
        </Styled.ContentRow>
      </Styled.Wrapper>
    );
  }
);

RowSelectorPopupNumberSelect.displayName = 'RowSelectorPopupNumberSelect';
