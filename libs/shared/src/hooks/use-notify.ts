import { OptionsObject, useSnackbar } from 'notistack';
import { ReactNode, useEffect } from 'react';

export function useNotify() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return {
    closeSnackbar,
    success: (message: string) =>
      enqueueSnackbar(message, { variant: 'success' }),
    error: (message: string) => enqueueSnackbar(message, { variant: 'error' }),
    warning: (message: string) =>
      enqueueSnackbar(message, { variant: 'warning' }),
    info: (message: string) => enqueueSnackbar(message, { variant: 'info' }),
    message: (message: string) =>
      enqueueSnackbar(message, { variant: 'default' }), // TODO Sayad change color to white
    progress: (title: ReactNode, message: ReactNode) =>
      enqueueSnackbar(message, {
        title,
        variant: 'progress',
        hideIconVariant: true,
        persist: true,
        className: 'ProgressSnackbar',
        SnackbarProps: {
          style: { width: '400px' },
        },
      }),
    custom: (
      title: ReactNode,
      message: ReactNode,
      options?: Omit<OptionsObject, 'title' | 'className' | 'variant'>
    ) =>
      enqueueSnackbar(message, {
        hideIconVariant: true,
        persist: true,
        SnackbarProps: {
          style: { width: 'fit-content' },
        },
        ...options,
        title,
        variant: 'complete',
        className: 'CompleteSnackbar',
      }),
    // TODO Sayad change color to white
  };
}

export function useNotifyOnSuccess(
  value: boolean,
  message: string,
  callback?: () => void
) {
  const notify = useNotify();

  useEffect(() => {
    if (value) {
      notify.success(message);
      callback?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
}
