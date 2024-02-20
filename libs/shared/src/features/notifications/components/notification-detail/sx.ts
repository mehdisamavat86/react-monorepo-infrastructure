import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const content: SxStyle = {};

export const avatar: SxStyle = {
  borderRadius: 1,
  fontSize: (p) => p.spacing(2.5),
  bgcolor: (p) => p.palette.grey[p.palette.mode !== 'dark' ? 300 : 500],
  color: (p) => p.palette.grey[600],
};
