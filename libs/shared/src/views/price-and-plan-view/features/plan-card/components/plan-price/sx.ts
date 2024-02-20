import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};
export const title: SxStyle = {
  fontSize: (p) => p.typography.h2,
};
export const description: SxStyle = {
  fontSize: (p) => p.typography.body2,
  fontWeight: 700,
  color: (p) => p.palette.grey[500],
};
