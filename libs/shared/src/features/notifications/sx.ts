import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {
  paddingTop: 0,
};

export const popoverTitleSx: SxStyle = {
  fontSize: (p) => p.typography.h6.fontSize,
  padding: 2.5,
  borderBottom: (p) =>
    `1px solid ${
      p.palette.mode !== 'dark' ? p.palette.grey[300] : p.palette.grey[700]
    }`,
};

export const popoverSx: SxStyle = {
  width: '420px',
  padding: 0,
  display: 'flex',
};

export const contentSx: SxStyle = {
  maxHeight: 'unset',
  paddingTop: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: (p) => p.spacing(1),
  mt: (p) => p.spacing(1),
};
