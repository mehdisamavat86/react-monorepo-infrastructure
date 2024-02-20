import type { SxStyle } from '@myapp/shared/theme';
import type { SkeletonProps } from '@mui/material';

export interface SkeletonListProps extends SkeletonProps {
  className?: string;
  sx?: SxStyle;
  count?: number | SkeletonProps[];
}
