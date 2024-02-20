import { classnames } from '@myapp/shared/utils';
import { Box, Checkbox } from '@mui/material';
import { memo, useId } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useOnDragEnd } from './hooks/use-on-drag-end';
import * as Styled from './styles';
import type {
  SortableListItem as Item,
  SortableListProps as Props,
} from './types';

export const SortableList = memo(
  ({ className, items, selectable, renderItem, onChange }: Props) => {
    const id = useId();
    const onDragEnd = useOnDragEnd(items, onChange);
    const onSelectChange = (item: Item) => {
      onChange(
        items.map((y) =>
          item.id === y.id ? { ...y, selected: !y.selected } : y
        )
      );
    };

    return (
      <Styled.Wrapper onDragEnd={onDragEnd}>
        <Droppable droppableId={id}>
          {(drop) => (
            <Styled.List
              className={classnames('SortableList', className)}
              ref={drop.innerRef}
              {...drop.droppableProps}
              flexDirection="column"
            >
              {items.map((x, index) => (
                <Draggable draggableId={x.id} index={index} key={x.id}>
                  {(drag) => (
                    <Styled.Item {...drag.draggableProps} ref={drag.innerRef}>
                      <Box>
                        {selectable && (
                          <Checkbox
                            checked={x.selected}
                            onChange={() => onSelectChange(x)}
                          />
                        )}

                        {renderItem ? renderItem(x) : x.title}
                      </Box>

                      <Box {...drag.dragHandleProps} display="flex">
                        <Styled.Handler name="park-drag" size={18} />
                      </Box>
                    </Styled.Item>
                  )}
                </Draggable>
              ))}
              {drop.placeholder}
            </Styled.List>
          )}
        </Droppable>
      </Styled.Wrapper>
    );
  }
);

SortableList.displayName = 'SortableList';
