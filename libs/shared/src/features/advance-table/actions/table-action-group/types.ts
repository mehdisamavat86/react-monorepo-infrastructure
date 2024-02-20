import { Prettify } from '@myapp/shared/definition';
import type {
  ActionGroupItemProps,
  ActionGroupProps,
  AdvanceTableActionConfig,
  AdvanceTableActionProps,
} from '@myapp/shared/features';
import { ComponentProps } from 'react';

export type TableActionGroupItem<
  C extends AdvanceTableActionConfig = AdvanceTableActionConfig
> = Prettify<
  ActionGroupItemProps & {
    el: C;
    // TODO sayad please infer props from C
    extraProps?: ComponentProps<C>;
  }
>;

export interface TableActionGroupProps<T = any>
  extends AdvanceTableActionProps<T>,
    Omit<ActionGroupProps, 'items'> {
  className?: string;
  items: Array<TableActionGroupItem>;
}
