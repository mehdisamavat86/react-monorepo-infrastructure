import type { SxStyle } from '@myapp/shared/theme';
import type { PropsWithChildren, ReactNode } from 'react';

export interface AccordionProps extends PropsWithChildren {
  className?: string;
  title: ReactNode;
  sx?: SxStyle;
}
