import type { ButtonProps } from '@mui/material';
import type { DownloadableFileLink } from '@myapp/shared/definition';
import type { ReactNode } from 'react';

export interface DownloadLinkButtonProps {
  className?: string;
  link?: DownloadableFileLink;
  title?: ReactNode;
  loading?: boolean;
  titleProps?: ButtonProps;
  handleDownload?: (key: keyof DownloadableFileLink) => void;
}
