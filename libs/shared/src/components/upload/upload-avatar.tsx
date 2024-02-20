import { toValidDownloadUrl } from '@myapp/shared/utils';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { forwardRef, useImperativeHandle } from 'react';
import { useDropzone } from 'react-dropzone';
import { Icon } from '../icon';
import { Image } from '../image';
import RejectionFiles from './errors-rejection-files';
import { UploadAvatarRef, UploadProps } from './types';

const types = ['jpeg', 'jpg', 'png'];
const accepted = types.map((x) => `.${x}`).join();

export const DEFAULT_ACCEPTED_MESSAGE = types.map((x) => `*.${x}`).join();

const UploadAvatar = forwardRef<UploadAvatarRef, UploadProps>(
  (
    {
      error,
      file,
      disabled,
      helperText,
      showRealRejectReason,
      loading,
      percentage,
      sx,
      ...other
    },
    outerRef
  ) => {
    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragReject,
      fileRejections,
      open,
    } = useDropzone({
      multiple: false,
      disabled,
      accept: {
        [accepted]: [],
      },
      ...other,
    });

    const hasFile = !!file;
    const hasError = isDragReject || !!error;
    const imgUrl = typeof file === 'string' ? file : file?.preview;
    const renderPreview = hasFile && (
      <Image
        alt="avatar"
        src={toValidDownloadUrl(imgUrl)}
        sx={{
          width: 1,
          height: 1,
          borderRadius: '50%',
        }}
      />
    );
    const renderPlaceholder = (
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={1}
        className="upload-placeholder"
        sx={{
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 9,
          borderRadius: '50%',
          position: 'absolute',
          color: 'text.disabled',
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
          transition: (theme) =>
            theme.transitions.create(['opacity'], {
              duration: theme.transitions.duration.shorter,
            }),
          '&:hover': {
            opacity: 0.72,
          },
          ...(hasError && {
            color: 'error.main',
            bgcolor: 'error.lighter',
          }),
          ...(hasFile && {
            zIndex: 9,
            opacity: 0,
            color: 'common.white',
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.64),
          }),
        }}
      >
        <Icon name="camera-add" size={32} />

        <Typography variant="caption">
          {file ? 'Update photo' : 'Upload photo'}
        </Typography>
      </Stack>
    );
    const renderContent = (
      <Box
        sx={{
          width: 1,
          height: 1,
          overflow: 'hidden',
          borderRadius: '50%',
          position: 'relative',
        }}
      >
        {renderPreview}
        {renderPlaceholder}
      </Box>
    );

    useImperativeHandle(outerRef, () => ({ open }), [open]);

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Box
          {...getRootProps()}
          sx={{
            p: 1,
            m: 'auto',
            width: 144,
            height: 144,
            cursor: 'pointer',
            overflow: 'hidden',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: (theme) =>
              `1px dashed ${alpha(theme.palette.grey[500], 0.2)}`,
            ...(isDragActive && {
              opacity: 0.72,
            }),
            ...(disabled && {
              opacity: 0.48,
              pointerEvents: 'none',
            }),
            ...(hasError && {
              borderColor: 'error.light',
            }),
            ...(hasFile && {
              ...(hasError && {
                bgcolor: 'error.lighter',
              }),
              '&:hover .upload-placeholder': {
                opacity: 1,
              },
            }),
            ...sx,
          }}
        >
          <input {...getInputProps()} />

          {loading ? (
            <CircularProgress value={percentage || undefined} />
          ) : (
            renderContent
          )}
        </Box>

        {helperText === true ? (
          <Typography
            variant="caption"
            sx={{
              mx: 'auto',
              display: 'block',
              textAlign: 'center',
              color: 'text.disabled',
            }}
          >
            Allowed {DEFAULT_ACCEPTED_MESSAGE}.
          </Typography>
        ) : (
          helperText
        )}

        <RejectionFiles
          fileRejections={fileRejections}
          showRealRejectReason={showRealRejectReason}
        />
      </Box>
    );
  }
);

export default UploadAvatar;
