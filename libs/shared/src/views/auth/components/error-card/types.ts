import type { PropsWithChildren } from 'react';

export interface ErrorCardProps extends PropsWithChildren {
  className?: string;
  title?: string;
  message?: string;
}
