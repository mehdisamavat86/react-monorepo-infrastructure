import {
  Skeleton,
  Stack,
  TableCell,
  TableRow,
  type TableRowProps,
} from '@mui/material';
import { range } from 'lodash-es';

export default function TableSkeleton({
  cols,
  ...other
}: TableRowProps & { cols: number }) {
  return (
    <TableRow {...other}>
      <TableCell colSpan={12}>
        <Stack spacing={3} direction="row" alignItems="center">
          {range(0, cols).map((k) => (
            <Skeleton key={k} sx={{ width: 1, height: 12 }} />
          ))}
        </Stack>
      </TableCell>
    </TableRow>
  );
}
