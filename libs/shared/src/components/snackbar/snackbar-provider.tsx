import { Collapse, IconButton } from '@mui/material';
import {
  SnackbarProvider as NotistackProvider,
  closeSnackbar,
} from 'notistack';
import { PropsWithChildren, useRef } from 'react';
import { Icon } from '../icon';
import { useSettingsContext } from '../settings';
import { StyledIcon, StyledNotistack } from './styles';
import { ProgressSnackbar } from './components/progress-snackbar';
import { CompleteSnackbar } from './components/complete-snackbar';

export default function SnackbarProvider({ children }: PropsWithChildren) {
  const settings = useSettingsContext();

  const isRTL = settings.themeDirection === 'rtl';

  const notistackRef = useRef<any>(null);

  return (
    <NotistackProvider
      ref={notistackRef}
      maxSnack={5}
      preventDuplicate
      autoHideDuration={3000}
      TransitionComponent={isRTL ? Collapse : undefined}
      variant="success" // Set default variant
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      iconVariant={{
        info: (
          <StyledIcon color="info">
            <Icon name="info-fill" />
          </StyledIcon>
        ),
        success: (
          <StyledIcon color="success">
            <Icon name="check-circle" />
          </StyledIcon>
        ),
        warning: (
          <StyledIcon color="warning">
            <Icon name="alert-fill" />
          </StyledIcon>
        ),
        error: (
          <StyledIcon color="error">
            <Icon name="danger" />
          </StyledIcon>
        ),
      }}
      Components={{
        default: StyledNotistack,
        info: StyledNotistack,
        success: StyledNotistack,
        warning: StyledNotistack,
        error: StyledNotistack,
        progress: ProgressSnackbar,
        complete: CompleteSnackbar,
      }}
      // with close as default
      action={(snackbarId) => (
        <IconButton
          size="small"
          onClick={() => closeSnackbar(snackbarId)}
          sx={{ p: 0.5 }}
        >
          <Icon name="close" />
        </IconButton>
      )}
    >
      {children}
    </NotistackProvider>
  );
}
