import type { PropsWithChildren, ReactNode } from 'react';

export interface DetailedMessageCardProps extends PropsWithChildren {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
}
