import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const headerTitle: SxStyle = {
  fontSize: (p) => p.typography.h6,
  mb: (p) => p.spacing(5),
};
