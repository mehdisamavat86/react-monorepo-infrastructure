import { classnames } from '@myapp/shared/utils';
import Checkbox from '@mui/material/Checkbox';
import { memo } from 'react';
import { ActionButtonIcon } from '../action-button-icon';
import { ActionButtonText } from '../action-button-text';
import * as Styled from './styles';
import type { RowSelectorPopupWrapperProps as Props } from './types';

export const RowSelectorPopupWrapper = memo(
  ({ className, sx, disabled, count, children, state, onClick }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('RowSelectorPopupWrapper', className)}
        sx={sx}
        onClick={(e) => !disabled && onClick(e)}
      >
        <Checkbox
          indeterminate={state?.indeterminate}
          checked={state?.checked}
          disabled={disabled}
        />
        <ActionButtonText>{!!count && `${count} selected`}</ActionButtonText>
        <ActionButtonIcon name="chevron-down" />
        {children}
      </Styled.Wrapper>
    );
  }
);

RowSelectorPopupWrapper.displayName = 'RowSelectorPopupWrapper';
