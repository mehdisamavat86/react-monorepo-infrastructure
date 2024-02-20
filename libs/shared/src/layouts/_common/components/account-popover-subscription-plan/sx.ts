import type { SxStyle } from '@myapp/shared/theme';

export const currentPlan: SxStyle = {
  fontWeight: (p) => p.typography.fontWeightBold ?? 'bold',
};
