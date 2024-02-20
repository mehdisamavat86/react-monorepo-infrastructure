import type { SxStyleFunc } from '@myapp/shared/theme';
import { AdvanceTableColumn } from '../../types';

export const cell: SxStyleFunc<AdvanceTableColumn<any>> = (col) => ({
  fontSize: (x) => x.typography.body2.fontSize,
  width: col.width ?? col.minWidth ?? '100%',
  maxWidth: col.width ?? col.minWidth,
  overflow: 'hidden',
  minWidth: col.minWidth,
  whiteSpace: 'pre-wrap',
  textAlign: col.align,
  boxShadow: col.boxShadow,
});
