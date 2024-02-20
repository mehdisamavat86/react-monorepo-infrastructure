import { alpha } from '@mui/material';
import { SxStyle, SxStyleFunc } from '@myapp/shared/theme';

export const dot: SxStyle = {
  borderRadius: '50%',
  width: (p) => p.spacing(3),
  aspectRatio: '1/1',
  background: (p) => p.palette.grey[200],
  flex: 'none',
};

export const iconWrapper: SxStyleFunc<boolean | undefined> = (isSuccess) => ({
  color: isSuccess
    ? (p) => p.palette.success.dark
    : (p) => p.palette.error.dark,
  background: isSuccess
    ? (p) => p.palette.success.lighter
    : (p) => alpha(p.palette.error.dark, 0.15),
  fontSize: (p) => p.typography.subtitle1,
  width: '50px',
  aspectRatio: '1/1',
  borderRadius: '50%',
});

export const icon: SxStyleFunc<boolean | undefined> = (isSuccess) => ({
  borderRadius: '50%',
  background: isSuccess
    ? (p) => p.palette.success.lighter
    : (p) => alpha(p.palette.error.dark, 0.4),

  padding: isSuccess ? 0 : (p) => p.spacing(0.3),
  boxSizing: 'content-box',
  fontWeight: '400',
});

export const paymentMessage: SxStyleFunc<boolean | undefined> = (
  isSuccess
) => ({
  color: isSuccess
    ? (p) => p.palette.success.dark
    : (p) => p.palette.error.dark,
  background: isSuccess
    ? (p) => p.palette.success.lighter
    : (p) => alpha(p.palette.error.dark, 0.18),
  fontSize: (p) => p.typography.h5,
  fontWeight: '700',
  padding: (p) => p.spacing(1.2),
  borderRadius: (p) => p.spacing(1),
});

export const paymentDescription: SxStyleFunc<boolean | undefined> = (
  isSuccess
) => ({
  color: isSuccess
    ? (p) => p.palette.success.dark
    : (p) => p.palette.error.dark,
  fontSize: (p) => p.typography.h4,
});
