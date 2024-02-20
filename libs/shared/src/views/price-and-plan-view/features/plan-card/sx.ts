import type { SxStyle, SxStyleFunc } from '@myapp/shared/theme';

export const root: SxStyleFunc<boolean | undefined> = (isMostPopular) => ({
  background: (x) =>
    isMostPopular ? x.palette.primary.superlight : x.palette.common.white,
  borderWidth: (x) => (isMostPopular ? '2px' : '1px'),
  borderStyle: 'solid',
  borderColor: (x) =>
    isMostPopular ? x.palette.primary.main : x.palette.grey[400],
});

export const iconBox: SxStyle = {
  pr: '1px',
  background: (p) => p.palette.grey[500],
  borderRadius: '50%',
};

export const icon: SxStyle = {
  color: (p) => p.palette.common.white,
};

export const compareBtn: SxStyleFunc<boolean | undefined> = (
  isMostPopular
) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  mt: (p) => p.spacing(5),
  py: (p) => p.spacing(1.5),
  px: (p) => p.spacing(2),
  color: (p) => p.palette.grey[500],
  background: isMostPopular
    ? (p) => p.palette.common.white
    : (p) => p.palette.grey[200],
});
