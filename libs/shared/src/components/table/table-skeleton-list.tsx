import { type TableRowProps } from '@mui/material';
import { range, uniqueId } from 'lodash-es';
import TableSkeleton from './table-skeleton';

export default function TableSkeletonList({
  rowProps,
  count,
  cols,
}: {
  count?: number;
  rowProps?: TableRowProps;
  cols: number;
}) {
  return (
    <>
      {range(0, count).map(() => (
        <TableSkeleton key={uniqueId()} {...rowProps} cols={cols} />
      ))}
    </>
  );
}
