import type { TableSelectionProps } from '@myapp/shared/components';
import type { AdvanceTableConfig } from '../../types';

export interface TableRowProps extends Record<string, any> {
  className?: string;
  item: Record<string, any>;
  index: number;
  selected: boolean;
  config: AdvanceTableConfig<any, any>;
  columns: AdvanceTableConfig<any, any>['columns'];
  onSelect?: TableSelectionProps['onSelectRow'];
  checkboxEnabled: boolean;
  onRowClick?: VoidFunction;
}
