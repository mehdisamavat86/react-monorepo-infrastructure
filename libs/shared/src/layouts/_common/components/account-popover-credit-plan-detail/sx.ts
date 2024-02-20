import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const remainingDaysWrapper: SxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: (p) => p.spacing(0.5),
};
