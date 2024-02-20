import { Box, ButtonBase, Stack } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { Icon } from '../../icon';

type Props = {
  value: boolean;
  onChange: VoidFunction;
};

export default function StretchOptions({ value, onChange }: Props) {
  const theme = useTheme();

  return (
    <ButtonBase
      onClick={onChange}
      sx={{
        width: 1,
        height: 80,
        borderRadius: 1,
        color: 'text.disabled',
        border: `solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
        ...(value && {
          bgcolor: 'background.paper',
          color: theme.palette.primary.main,
          boxShadow: `-24px 8px 24px -4px ${alpha(
            theme.palette.mode === 'light'
              ? theme.palette.grey[500]
              : theme.palette.common.black,
            0.08
          )}`,
        }),
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: 0.24,
          transition: theme.transitions.create(['width']),
          ...(value && {
            width: 0.5,
          }),
        }}
      >
        <Icon
          name={value ? 'chevron-left' : 'chevron-right'}
          sxx={{
            color: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }}
        />

        <Box sx={{ flexGrow: 1, borderBottom: `dashed 1.5px currentcolor` }} />

        <Icon
          name={value ? 'chevron-right' : 'chevron-left'}
          sxx={{
            color: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }}
        />
      </Stack>
    </ButtonBase>
  );
}
