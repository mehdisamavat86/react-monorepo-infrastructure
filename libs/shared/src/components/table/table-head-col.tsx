import type { SxStyle } from '@myapp/shared/theme';
import { Box, TableCell, TableSortLabel } from '@mui/material';
import type { TableColumn } from './types';

type Props = {
  headCell: TableColumn<Record<string, any>>;
  order?: 'asc' | 'desc';
  orderBy?: string;
  colSpan?: number;
  isLast?: boolean;
  onSort?: (id: string) => void;
  sx?: SxStyle;
};

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
} as const;

export default function TableHeadCol({
  headCell,
  colSpan,
  order,
  orderBy,
  sx,
  isLast,
  onSort,
}: Props) {
  let sortableField = headCell.sortable && headCell.id;
  if (typeof headCell.sortable === 'string') sortableField = headCell.sortable;
  const isSelected = !!(sortableField && orderBy === sortableField);

  return (
    <TableCell
      key={headCell.id}
      align={headCell.align || 'left'}
      sortDirection={isSelected ? order : false}
      colSpan={colSpan}
      sx={{
        ...sx,
        borderStyle: 'hidden',
        width: isLast ? '100%' : headCell.width ?? headCell.minWidth ?? '100%',
        minWidth: headCell.minWidth ?? headCell.width,
      }}
    >
      {onSort ? (
        <TableSortLabel
          hideSortIcon
          active={isSelected}
          direction={isSelected ? order : 'asc'}
          style={{
            cursor: headCell.sortable ? 'pointer' : 'default',
            minWidth: headCell.minWidth ?? headCell.width ?? 'max-content',
          }}
          onClick={
            sortableField ? () => onSort(sortableField as string) : undefined
          }
        >
          {headCell.label || ' '}

          {isSelected ? (
            <Box sx={{ ...visuallyHidden }}>
              {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
            </Box>
          ) : null}
        </TableSortLabel>
      ) : (
        headCell.label
      )}
    </TableCell>
  );
}
