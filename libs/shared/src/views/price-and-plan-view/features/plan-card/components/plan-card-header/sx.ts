import type { SxStyle, SxStyleFunc } from '@myapp/shared/theme';

export const root: SxStyle = {};
export const title: SxStyle = {
  fontSize: (p) => p.typography.h3,
};
export const description: SxStyle = {
  mt: (p) => p.spacing(1.5),
  fontSize: (p) => p.typography.body2,
  color: (p) => p.palette.grey[600],
};
export const date: SxStyle = {
  mt: (p) => p.spacing(1),
  ml: (p) => p.spacing(-2),
  fontSize: (p) => p.typography.caption,
  color: (p) => p.palette.error.darker,
};
export const Badge: SxStyleFunc<boolean | undefined> = (isNext) => ({
  background: (p) =>
    isNext ? p.palette.warning.light : p.palette.success.light,
  fontSize: (p) => p.typography.body2,
  color: (p) => (isNext ? p.palette.error.main : p.palette.success.darker),
});
