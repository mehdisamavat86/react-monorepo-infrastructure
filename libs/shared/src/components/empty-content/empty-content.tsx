import { Box, Stack, Typography, type StackProps } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { SxStyle } from '@myapp/shared/theme';

export type EmptyContentProps = StackProps & {
  title?: string;
  titleSx?: SxStyle;
  imgUrl?: string;
  imageSx?: SxStyle;
  filled?: boolean;
  description?: string;
  descriptionSx?: SxStyle;
  action?: React.ReactNode;
};

export default function EmptyContent({
  title,
  titleSx,
  imgUrl,
  imageSx,
  action,
  filled,
  description,
  descriptionSx,
  sx,
  ...other
}: EmptyContentProps) {
  return (
    <Stack
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
      sx={{
        px: 3,
        height: 1,
        ...(filled && {
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) =>
            `dashed 1px ${alpha(theme.palette.grey[500], 0.08)}`,
        }),
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        alt="empty content"
        src={imgUrl || '/assets/icons/empty/ic_content.svg'}
        sx={{ width: 1, maxWidth: 160, ...imageSx }}
      />

      {title && (
        <Typography
          variant="h6"
          component="span"
          sx={{
            mt: 1,
            color: 'text.disabled',
            textAlign: 'center',
            ...titleSx,
          }}
        >
          {title}
        </Typography>
      )}

      {description && (
        <Typography
          variant="caption"
          sx={{
            mt: 1,
            color: 'text.disabled',
            textAlign: 'center',
            ...descriptionSx,
          }}
        >
          {description}
        </Typography>
      )}

      {action && action}
    </Stack>
  );
}
