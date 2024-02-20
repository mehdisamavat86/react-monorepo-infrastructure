import type { ReactElement, ReactNode } from 'react';

export interface SortableListItem {
  id: string;
  title: ReactNode;
  selected?: boolean;
}

export interface SortableListProps {
  className?: string;
  items: SortableListItem[];
  selectable?: boolean;
  renderItem?: (column: SortableListItem) => ReactElement;
  onChange: (items: SortableListItem[]) => void;
}
