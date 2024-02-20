import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const title: SxStyle = {
  fontSize: (p) => p.typography.h5,
  color: (p) => p.palette.success.dark,
};

export const description: SxStyle = {
  fontSize: (p) => p.typography.subtitle1,
};
export const confirmBtn: SxStyle = {
  fontSize: (p) => p.typography.subtitle1,
  fontWeight: 900,
};
export const cancelBtn: SxStyle = {
  px: (p) => p.spacing(2),
  py: (p) => p.spacing(1),
  width: '100%',
};
