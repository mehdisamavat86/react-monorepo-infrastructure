import { Icon } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils/class-names';
import { createElement, memo } from 'react';
import * as Styled from './styles';
import type { TableActionGroupProps as Props } from './types';

export const TableActionGroup = memo(
  ({ className, item, rowNumber, items, ...other }: Props) => {
    items ||= [];

    return (
      <Styled.Wrapper
        className={classnames('TableActionGroup', className)}
        {...other}
        contentSx={{ p: 0.5, ...other.contentSx }}
        items={items.map((x) => ({
          ...x,
          children: createElement(x.el, { item, rowNumber, ...x.extraProps }),
        }))}
        buttonProps={{
          size: 'small',
          variant: 'text',
          sx: {
            minWidth: 'fit-content',
          },
          children: <Icon name="more-vertical" color="grey" />,
          ...other.buttonProps,
        }}
      />
    );
  }
);

TableActionGroup.displayName = 'TableActionGroup';
