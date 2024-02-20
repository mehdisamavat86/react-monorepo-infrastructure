import { Responders } from 'react-beautiful-dnd';
import { SortableListItem } from '../types';

export function useOnDragEnd(
  items: SortableListItem[],
  onChange: (items: SortableListItem[]) => void
) {
  const onDragEnd: Responders['onDragEnd'] = ({
    source,
    destination,
    draggableId,
  }) => {
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    const newColumns = [...items];
    newColumns.splice(source.index, 1);
    const draggedElement = items.find(
      (el) => el.id === draggableId
    ) as SortableListItem;
    newColumns.splice(destination.index, 0, draggedElement);
    onChange(newColumns);
  };
  return onDragEnd;
}
