import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {
  pt: (p) => p.spacing(10),
};

export const heading: SxStyle = {
  fontSize: (p) => p.typography.h5,
};
