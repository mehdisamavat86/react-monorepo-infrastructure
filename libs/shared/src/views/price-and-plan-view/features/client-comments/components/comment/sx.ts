import type { SxStyle, SxStyleFunc } from '@myapp/shared/theme';

export const root: SxStyle = {
  position: 'relative',
};
export const information: SxStyleFunc<boolean | undefined> = (reverse) => ({
  '@media screen and (max-width: 1650px)': {
    left: reverse ? -260 : 60,
  },
  position: 'absolute',
  top: 0,
  left: reverse ? -260 : 90,
});
export const description: SxStyle = {
  '@media screen and (max-width: 1650px)': {
    fontSize: (p) => p.typography.caption,
    padding: (p) => p.spacing(1),
  },
  background: (p) => p.palette.common.white,
  width: (p) => p.spacing(35),
  padding: (p) => p.spacing(1.5),
  fontSize: (p) => p.typography.body2,
  lineHeight: (p) => p.spacing(2.5),
  borderRadius: (p) => p.spacing(1.5),
};
export const name: SxStyleFunc<boolean | undefined> = (reverse) => ({
  direction: reverse ? 'rtl' : 'ltr',
  fontSize: (p) => p.typography.body1,
  mx: (p) => p.spacing(3),
});
export const position: SxStyleFunc<boolean | undefined> = (reverse) => ({
  direction: reverse ? 'rtl' : 'ltr',

  fontWeight: (p) => p.typography.fontWeightBold,
  mx: (p) => p.spacing(3),
});
