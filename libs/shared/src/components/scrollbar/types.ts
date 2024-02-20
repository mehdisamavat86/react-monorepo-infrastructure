import type { Props } from 'simplebar-react';

import type { SxStyle } from '@myapp/shared/theme';

export interface ScrollbarProps extends Props {
  children?: React.ReactNode;
  sx?: SxStyle;
}
