import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const buttonWrapper: SxStyle = {
  display: 'flex',
  gap: (p) => p.spacing(0.5),
};
