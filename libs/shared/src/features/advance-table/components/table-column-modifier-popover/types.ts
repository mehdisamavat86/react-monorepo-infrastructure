import {
  IconType,
  PopoverActionEvent,
  SortableListItem,
  SortableListPopoverProps,
} from '@myapp/shared/components';
import type { ReactNode } from 'react';

export type TableColumnModifier = SortableListItem;

export interface TableColumnModifierPopoverProps {
  className?: string;
  id: string;
  icon?: IconType | false;
  title?: ReactNode;
  items: TableColumnModifier[];
  element?: SortableListPopoverProps['element'];
  disableStorage?: boolean;
  onSubmit?: PopoverActionEvent<TableColumnModifier[]>;
}
