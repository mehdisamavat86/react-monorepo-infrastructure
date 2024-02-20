import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};
export const btnWrapper: SxStyle = {
  px: (p) => p.spacing(9),
};

export const title: SxStyle = {
  fontSize: (p) => p.typography.h5,
};

export const description: SxStyle = {
  fontSize: (p) => p.typography.subtitle1,
};
export const confirmBtn: SxStyle = {
  py: (p) => p.spacing(1.5),
  px: (p) => p.spacing(0.5),
  fontSize: (p) => p.typography.subtitle2,
  fontWeight: 700,
};
export const cancelBtn: SxStyle = {
  px: (p) => p.spacing(1),
};
