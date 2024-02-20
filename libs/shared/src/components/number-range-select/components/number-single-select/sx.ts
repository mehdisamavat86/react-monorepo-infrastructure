import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const inputProps: SxStyle = {
  fontSize: (p) => p.typography.caption.fontSize,
};
