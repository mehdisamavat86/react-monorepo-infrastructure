import type { SxStyle, SxStyleFunc } from '@myapp/shared/theme';

export const root: SxStyle = {};
export const itemWrapper: SxStyle = {
  height: (p) => p.spacing(45),
  overflow: 'auto',
};

export const icon: SxStyle = {
  color: (p) => p.palette.success.dark,
};

export const header: SxStyle = {
  fontSize: (p) => p.typography.subtitle2,
  fontWeight: 700,
  my: (p) => p.spacing(2),
};

export const title: SxStyleFunc<boolean | undefined> = (enabled) => ({
  '@media screen and (max-width: 1440px)': {
    fontSize: (p) => p.typography.caption,
    fontWeight: 700,
  },
  fontSize: (p) => p.typography.subtitle2,
  fontWeight: 700,
  color: (x) => (enabled ? x.palette.common.black : x.palette.grey[400]),
});
