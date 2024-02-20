import { bgBlur } from '@myapp/shared/theme';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Icon } from '../icon';

type Props = {
  onDownload?: VoidFunction;
};

export default function DownloadButton({ onDownload }: Props) {
  const theme = useTheme();

  return (
    <IconButton
      onClick={onDownload}
      sx={{
        p: 0,
        top: 0,
        right: 0,
        width: 1,
        height: 1,
        zIndex: 9,
        opacity: 0,
        position: 'absolute',
        borderRadius: 'unset',
        justifyContent: 'center',
        bgcolor: 'grey.800',
        color: 'common.white',
        transition: theme.transitions.create(['opacity']),

        '&:hover': {
          opacity: 1,
          ...bgBlur({
            opacity: 0.64,
            color: theme.palette.grey[900],
          }),
        },
      }}
    >
      <Icon name="arrow-down-circle" />
    </IconButton>
  );
}
