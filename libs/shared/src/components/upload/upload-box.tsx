import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useDropzone } from 'react-dropzone';
import { Icon } from '../icon';
import { UploadProps } from './types';

export default function UploadBox({
  placeholder,
  error,
  disabled,
  sx,
  ...other
}: UploadProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      disabled,
      ...other,
    });

  const hasError = isDragReject || error;

  return (
    <Box
      {...getRootProps()}
      sx={{
        m: 0.5,
        width: 64,
        height: 64,
        flexShrink: 0,
        display: 'flex',
        borderRadius: 1,
        cursor: 'pointer',
        alignItems: 'center',
        color: 'text.disabled',
        justifyContent: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
        border: (theme) => `dashed 1px ${alpha(theme.palette.grey[500], 0.16)}`,
        ...(isDragActive && {
          opacity: 0.72,
        }),
        ...(disabled && {
          opacity: 0.48,
          pointerEvents: 'none',
        }),
        ...(hasError && {
          color: 'error.main',
          bgcolor: 'error.lighter',
          borderColor: 'error.light',
        }),
        '&:hover': {
          opacity: 0.72,
        },
        ...sx,
      }}
    >
      <input {...getInputProps()} />

      {placeholder || <Icon name="upload-cloud" size={28} />}
    </Box>
  );
}
