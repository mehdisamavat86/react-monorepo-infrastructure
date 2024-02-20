import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};
export const accordionSummary: SxStyle = {
  py: (p) => p.spacing(3),
  px: (p) => p.spacing(3),
  fontSize: (p) => p.typography.h4,
};

export const title: SxStyle = {
  fontSize: (p) => p.typography.h6,
};
