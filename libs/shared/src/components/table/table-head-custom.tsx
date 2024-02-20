import type { SxStyle } from '@myapp/shared/theme';
import { Box, TableCell, TableHead, TableRow } from '@mui/material';
import * as SX from './sx';
import TableHeadCol from './table-head-col';
import type { TableColumn } from './types';

type Props = {
  order?: 'asc' | 'desc';
  orderBy?: string;
  headLabel: TableColumn[];
  sx?: SxStyle;
  cellSx?: SxStyle;
  canSelectAllRows?: boolean;
  onSort?: (id: string) => void;
};

export default function TableHeadCustom({
  order,
  orderBy,
  headLabel,
  sx,
  cellSx,
  canSelectAllRows,
  onSort,
}: Props) {
  return (
    <TableHead sx={sx}>
      <TableRow sx={SX.tableHeaderRow} className="TableHeaderRow">
        {canSelectAllRows && (
          <TableCell
            className="TableRowSelectCell"
            padding="checkbox"
            sx={cellSx}
          >
            <Box sx={SX.tableRowSelectCellInnerBox} />
          </TableCell>
        )}

        {headLabel.map((headCell, index) => (
          <TableHeadCol
            colSpan={canSelectAllRows === false && index === 0 ? 2 : 1}
            key={headCell.key || headCell.id}
            isLast={index === headLabel.length - 1}
            headCell={headCell}
            order={order}
            orderBy={orderBy}
            onSort={onSort}
          />
        ))}
      </TableRow>
    </TableHead>
  );
}
