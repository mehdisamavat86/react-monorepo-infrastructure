import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {
  position: 'relative',
};
export const button: SxStyle = {
  borderRadius: (p) => p.spacing(12),
  px: (p) => p.spacing(7),
  py: (p) => p.spacing(1),
  fontSize: (p) => p.typography.body1,
};

export const annualBenefit: SxStyle = {
  background: (p) => p.palette.success.light,
  position: 'absolute',
  bottom: (p) => p.spacing(-1),
  right: (p) => p.spacing(7.5),
  fontSize: (p) => p.typography.caption,
  borderRadius: (p) => p.spacing(2),
  px: (p) => p.spacing(1),
};
