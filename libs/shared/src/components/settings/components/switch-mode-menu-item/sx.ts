import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {
  justifyContent: 'space-between',
  px: (p) => p.spacing(2),
};
