import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};
export const svg: SxStyle = {
  position: 'absolute',
  top: (p) => p.spacing(-1),
  left: (p) => p.spacing(-4),
  zIndex: 1,
};

export const title: SxStyle = {
  fontSize: (p) => p.typography.h5,
  position: 'relative',
  zIndex: 9,
};
