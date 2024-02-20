import { Icon } from '@myapp/shared/components';
import { alertClasses, type AlertProps } from '@mui/material';
import { alpha, Theme } from '@mui/material/styles';

const COLORS = ['info', 'success', 'warning', 'error'] as const;

export default function Alert(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  const rootStyles = (ownerState: AlertProps) => {
    const standardVariant = ownerState.variant === 'standard';

    const filledVariant = ownerState.variant === 'filled';

    const outlinedVariant = ownerState.variant === 'outlined';

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.severity === color && {
        // STANDARD
        ...(standardVariant && {
          color: theme.palette[color].main,

          backgroundColor: alpha(theme.palette[color].main, 0.2),
          [`& .${alertClasses.icon}`]: {
            color: theme.palette[color][isLight ? 'main' : 'light'],
          },
        }),
        // FILLED
        ...(filledVariant && {
          color: theme.palette[color].contrastText,
          backgroundColor: theme.palette[color].main,
        }),
        // OUTLINED
        ...(outlinedVariant && {
          backgroundColor: alpha(theme.palette[color].main, 0.08),
          color: theme.palette[color][isLight ? 'dark' : 'light'],
          border: `solid 1px ${alpha(theme.palette[color].main, 0.16)}`,
          [`& .${alertClasses.icon}`]: {
            color: theme.palette[color].main,
          },
        }),
      }),
    }));

    return [...colorStyle];
  };

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: <Icon name="info-fill" />,
          info: <Icon name="info-fill" />,
          success: <Icon name="check-circle" />,
          warning: <Icon name="alert-fill" />,
        },
      },

      styleOverrides: {
        root: ({ ownerState }: { ownerState: AlertProps }) =>
          rootStyles(ownerState),
        icon: {
          opacity: 1,
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          marginBottom: theme.spacing(0.5),
          fontWeight: theme.typography.fontWeightSemiBold,
        },
      },
    },
  };
}
