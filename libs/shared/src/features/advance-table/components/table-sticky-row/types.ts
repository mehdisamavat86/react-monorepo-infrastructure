import { TableSelectionProps } from '@myapp/shared/components';
import type { AdvanceTableConfig } from '../../types';

export interface TableStickyRowProps extends Record<string, any> {
  className?: string;
  item: Record<string, any>;
  index: number;
  selected: boolean;
  config: AdvanceTableConfig<any, any>;
  columns: AdvanceTableConfig<any, any>['columns'];
  checkboxEnabled: boolean;
  onSelect?: TableSelectionProps['onSelectTopRow'];
  onRowClick?: VoidFunction;
}
