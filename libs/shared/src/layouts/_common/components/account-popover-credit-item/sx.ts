import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {
  width: '100%',
};

export const consumedCreditText: SxStyle = {
  fontWeight: (p) => p.typography.fontWeightBold,
  lineHeight: 1,
};

export const totalCreditText: SxStyle = {
  color: (p) =>
    p.palette.mode === 'light' ? p.palette.grey[700] : p.palette.grey[400],
  lineHeight: 1,
};
