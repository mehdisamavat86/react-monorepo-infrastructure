import type { SxStyle } from '@myapp/shared/theme';
import type { ReactQuillProps } from 'react-quill';

export interface EditorProps extends ReactQuillProps {
  error?: boolean;
  simple?: boolean;
  helperText?: React.ReactNode;
  sx?: SxStyle;
}
