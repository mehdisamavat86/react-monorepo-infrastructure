import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const title: SxStyle = {
  fontSize: (p) => p.typography.caption,
  fontWeight: 700,
};

export const icon: SxStyle = {
  color: (x) => x.palette.grey[400],
  marginInlineStart: 1,
};
