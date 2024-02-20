import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const upgradePlan: SxStyle = {
  fontWeight: (p) => p.typography.fontWeightBold ?? 'bold',
};
