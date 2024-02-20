import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { SortableList } from '../sortable-list/sortable-list';
import * as Styled from './styles';
import type { SortableListPopoverProps as Props } from './types';

export const SortableListPopover = memo(
  ({
    className,
    items,
    selectable,
    renderItem,
    onChange,
    ...popoverProps
  }: Props) => {
    const listProps = { items, renderItem, selectable, onChange };

    return (
      <Styled.Wrapper
        className={classnames('SortableListPopover', className)}
        {...popoverProps}
      >
        <SortableList {...listProps} />
      </Styled.Wrapper>
    );
  }
);

SortableListPopover.displayName = 'SortableListPopover';
