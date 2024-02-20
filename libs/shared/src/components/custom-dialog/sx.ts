import { SxStyle } from '@myapp/shared/theme';

export const closeIconSx: SxStyle = {
  cursor: 'pointer',
};

export const header: SxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: (p) => `${p.spacing(0.5)}`,
  justifyContent: 'space-between',
};

export const title: SxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: (p) => `${p.spacing(0.5)}`,
};
