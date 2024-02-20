import type { SxStyle } from '@myapp/shared/theme';
import type { DropzoneOptions } from 'react-dropzone';

export interface CustomFile extends File {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
}

export interface UploadProps extends DropzoneOptions {
  error?: boolean;
  sx?: SxStyle;
  thumbnail?: boolean;
  placeholder?: React.ReactNode;
  helperText?: React.ReactNode;
  disableMultiple?: boolean;
  showRealRejectReason?: boolean;
  loading?: boolean;
  percentage?: number;
  //
  file?: CustomFile | string | null;
  onDelete?: VoidFunction;
  //
  files?: (File | string)[];
  onUpload?: VoidFunction;
  onRemove?: (file: CustomFile | string) => void;
  onRemoveAll?: VoidFunction;
}

export type UploadAvatarRef = {
  open: () => void;
};
