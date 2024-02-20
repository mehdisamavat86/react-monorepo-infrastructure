import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {
  margin: 0,
};
export const titleWrapper: SxStyle = {};
export const firstRow: SxStyle = {
  px: (p) => p.spacing(5),
};

export const commentWrapper: SxStyle = {
  mt: (p) => p.spacing(8),
  px: (p) => p.spacing(12),
};

export const text1: SxStyle = {
  fontSize: (p) => p.typography.h5,
  textAlign: 'center',
  mt: (p) => p.spacing(4),
};
export const text2: SxStyle = {
  fontSize: (p) => p.typography.body1,
  textAlign: 'center',
  width: (p) => p.spacing(40),
};

export const bg1: SxStyle = {
  position: 'absolute',
  left: 0,
  background: (p) => p.palette.common.white,
  width: (p) => p.spacing(30),
  borderBottomRightRadius: '100%',
  aspectRatio: '1/1',
};

export const bg2: SxStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  background: (p) => p.palette.common.white,
  width: (p) => p.spacing(30),
  borderTopLeftRadius: '100%',
  aspectRatio: '1/1',
};
