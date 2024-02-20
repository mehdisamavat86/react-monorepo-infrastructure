import { classnames } from '@myapp/shared/utils';
import { Button } from '@mui/material';
import { createElement, memo } from 'react';
import { useAdvanceTableContext } from '../../context';
import * as Styled from './styles';
import type { TableFiltersProps as Props } from './types';

export const TableFilters = memo(({ className }: Props) => {
  const {
    config: { filters: filterComponents = [], hideResetFilters, filtersSx },
    filters,
    setFilter,
    clearFilters,
  } = useAdvanceTableContext();

  if (!filterComponents.length) return null;

  return (
    <Styled.Wrapper
      className={classnames('TableFilters', className)}
      sx={filtersSx}
    >
      <Styled.Items sx={filtersSx?.itemsSx}>
        {filterComponents.map((component) =>
          createElement(component, {
            key: (component as any).displayName,
            filters,
            setFilter,
          })
        )}
      </Styled.Items>

      {!hideResetFilters && <Button onClick={clearFilters}>Reset</Button>}
    </Styled.Wrapper>
  );
});

TableFilters.displayName = 'TableFilters';
