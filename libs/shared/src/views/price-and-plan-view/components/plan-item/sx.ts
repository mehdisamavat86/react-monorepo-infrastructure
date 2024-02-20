import type { SxStyle, SxStyleFunc } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const header: SxStyleFunc<boolean | undefined> = (isMostPopular) => ({
  background: (x) =>
    isMostPopular ? x.palette.primary.superlight : x.palette.common.white,
  borderWidth: (x) => (isMostPopular ? '2px' : '1px'),
  borderStyle: 'solid',
  borderColor: (x) =>
    isMostPopular ? x.palette.primary.main : x.palette.grey[400],
  color: (x) =>
    isMostPopular ? x.palette.primary.main : x.palette.common.black,
  fontWeight: 700,
});
