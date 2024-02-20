import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: (p) => p.spacing(1),
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  mb: (p) => p.spacing(-1),
  zIndex: 1,
  fontWeight: (p) => p.typography.fontWeightLight,
  fontSize: (p) => p.spacing(1.5),
};
