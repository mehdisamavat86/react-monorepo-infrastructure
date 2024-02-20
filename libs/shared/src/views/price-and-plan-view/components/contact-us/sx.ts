import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};
export const title: SxStyle = {
  fontWeight: (p) => p.typography.h3,
};
export const description: SxStyle = {};
export const contactLink: SxStyle = {
  textDecoration: 'none',
  color: (p) => p.palette.common.black,
  background: (p) => p.palette.common.white,
  mt: (p) => p.spacing(5),
  py: (p) => p.spacing(1.5),
  px: (p) => p.spacing(9),
  borderRadius: (p) => p.spacing(1),
  fontWeight: (p) => p.typography.fontWeightBold,
  ':hover': {
    textDecoration: 'none',
  },
};
