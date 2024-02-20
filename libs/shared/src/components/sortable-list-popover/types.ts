import type { CustomPopoverProps } from '../custom-popover';
import type { SortableListProps } from '../sortable-list/types';

export interface SortableListPopoverProps
  extends Omit<CustomPopoverProps, 'onChange'>,
    SortableListProps {
  className?: string;
}
