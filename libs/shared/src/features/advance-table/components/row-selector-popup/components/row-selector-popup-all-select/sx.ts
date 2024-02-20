import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const icon: SxStyle = {
  color: (x) => x.palette.grey[500],
  marginInlineStart: 1,
};
