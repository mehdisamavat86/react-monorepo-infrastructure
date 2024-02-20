import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { Table } from './components/table';
import { TableFilters } from './components/table-filters';
import { AdvanceTableContextProvider } from './context';
import * as Styled from './styles';
import type { AdvanceTableProps as Props } from './types';
import { addExtraFilter } from './utils';

export const AdvanceTable = memo(
  ({ className, config, extraFilters, afterEl, beforeEl }: Props) => {
    const configWithExtraFilters = addExtraFilter(config, extraFilters);
    return (
      <AdvanceTableContextProvider config={configWithExtraFilters}>
        {beforeEl}
        <Styled.Wrapper
          className={classnames('AdvanceTable', className, {
            'rounded-header': config.styles?.roundedHeader !== false,
          })}
        >
          <TableFilters />
          <Table />
        </Styled.Wrapper>
        {afterEl}
      </AdvanceTableContextProvider>
    );
  }
);

AdvanceTable.displayName = 'AdvanceTable';
