import type { SxStyle, SxStyleFunc } from '@myapp/shared/theme';

export const root: SxStyle = {};
export const nickname: SxStyle = {
  fontSize: (p) => p.typography.body2,
};

export const title: SxStyle = {
  position: 'relative',
  flexGrow: 1,
  background: (p) => p.palette.common.white,
  px: (p) => p.spacing(1),
  py: (p) => p.spacing(1.5),
  borderRadius: (p) => p.spacing(1),
};

export const subInfo: SxStyleFunc<boolean | undefined> = (active) => ({
  position: 'absolute',
  top: (p) => p.spacing(-4),
  width: '110%',
});
export const date: SxStyle = {
  color: (p) => p.palette.warning.darker,
  fontSize: '10px',
};

export const badge: SxStyleFunc<boolean | undefined> = (current) => ({
  background: current
    ? (p) => p.palette.success.light
    : (p) => p.palette.warning.light,
  color: (p) => p.palette.warning.darker,
  fontSize: '10px',
  px: (p) => p.spacing(0.5),
  py: (p) => p.spacing(0.2),
  borderRadius: (p) => p.spacing(2),
});
