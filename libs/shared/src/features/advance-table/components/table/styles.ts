import { Scrollbar } from '@myapp/shared/components';
import { Table as BaseTable, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TableRow as BaseTableRow } from '../table-row';

export const Wrapper = styled(Box)<{ 'data-border-style'?: string | boolean }>`
  tr {
    position: relative;

    :not(.TableStickyRow):not(.TableHeaderRow) {
      :not(.TableStickyRowsDivider) {
        th {
          background: ${(p) => p.theme.palette.background.paper};
        }
      }
    }

    &.TableStickyRow {
      &,
      td,
      th {
        border: none !important;
      }
    }

    &:not(.TableStickyRowsDivider) {
      td {
        background: transparent;
      }
    }
  }

  &.bordered {
    border: 1px solid ${(p) => p.theme.palette.divider};
    border-start-start-radius: ${(p) => p.theme.shape.borderRadius}px;
    border-start-end-radius: ${(p) => p.theme.shape.borderRadius}px;

    th,
    td {
      border-width: 0px;
      border-style: solid;
      border-bottom-width: 1px;
      border-color: ${(p) => p.theme.palette.divider};

      :not(:last-child) {
        border-right-width: 1px;
      }
    }

    td {
      border-style: ${(p) => p['data-border-style'] || 'solid'};
    }
  }

  .TableRowSelectCell {
    width: 0;
    border-right: none !important;
    padding-right: 0;
  }

  .TableRowSelectCell + :is(td, th) {
    padding-left: 0;
  }

  &.notFound.hideHeader {
    table {
      height: 100%;

      td,
      th {
        border: none !important;
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }
`;

export const ScrollWrapper = styled(Scrollbar)<{ x?: number }>`
  > div > .simplebar-wrapper {
    height: ${(p) => p.x};

    .simplebar-content {
      height: 100%;
    }
  }
`;

export const Table = styled(BaseTable)``;

export const TableRow = styled(BaseTableRow)``;
