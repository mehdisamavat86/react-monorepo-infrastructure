import type { SxStyle, SxStyleFunc } from '@myapp/shared/theme';

export const root: SxStyle = {};
export const title: SxStyle = {
  fontSize: (p) => p.typography.body2,
  pl: (p) => p.spacing(2),
};
export const item: SxStyle = {
  flexGrow: 1,
  background: (p) => p.palette.common.white,
  height: (p) => p.spacing(6),
};
export const itemWrapper: SxStyle = {
  borderRadius: (p) => p.spacing(1),
  overflow: 'hidden',
};
export const summary: SxStyle = {
  width: '100%',
  height: (p) => p.spacing(9),
};

export const icon: SxStyleFunc<boolean | undefined> = (active) => ({
  color: active ? (p) => p.palette.success.dark : (p) => p.palette.grey[400],
});

export const compareName: SxStyle = {
  fontSize: (p) => p.typography.body2,
  fontWeight: 700,
};
