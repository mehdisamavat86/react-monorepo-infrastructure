import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { Icon } from '@myapp/shared/components';
import * as Styled from './styles';
import * as SX from './sx';
import type { RowSelectorPopupPageSelectProps as Props } from './types';

export const RowSelectorPopupPageSelect = memo(
  ({ className, handleClick }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('RowSelectorPopupPageSelect', className)}
        sx={SX.root}
        item
        xs={12}
      >
        <Styled.OptionButton
          startIcon={<Icon size={20} name="outline-source" />}
          onClick={handleClick}
          variant="text"
          color="inherit"
        >
          Select this page
        </Styled.OptionButton>
      </Styled.Wrapper>
    );
  }
);

RowSelectorPopupPageSelect.displayName = 'RowSelectorPopupPageSelect';
