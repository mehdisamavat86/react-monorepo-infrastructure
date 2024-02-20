import { HEADER } from '@myapp/shared/layouts/config-layout';
import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const homeTitle: SxStyle = { marginRight: 'auto' };

export const homeWrapper: SxStyle = {
  minHeight: HEADER.BOTTOM,
  borderBottom: (p) => `solid 1px ${p.palette.grey[200]}`,
  px: 2,
  py: 0,
};

export const paper: SxStyle = {
  backgroundColor: (p) => p.palette.common.white,
  backgroundImage: 'none!important',
};

export const settings: SxStyle = { marginTop: 'auto' };
