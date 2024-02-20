import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { RowSelectorPopupActionButtonsProps as Props } from './types';

export const RowSelectorPopupActionButtons = memo(
  ({ className, onApply, onClear }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('RowSelectorPopupActionButtons', className)}
        sx={SX.root}
        item
        xs={12}
        justifyContent="center"
      >
        <Styled.ActionButton variant="text" color="error" onClick={onClear}>
          Clear Selection
        </Styled.ActionButton>
        <Styled.ActionButton
          variant="contained"
          color="primary"
          onClick={onApply}
        >
          Apply Selection
        </Styled.ActionButton>
      </Styled.Wrapper>
    );
  }
);

RowSelectorPopupActionButtons.displayName = 'RowSelectorPopupActionButtons';
