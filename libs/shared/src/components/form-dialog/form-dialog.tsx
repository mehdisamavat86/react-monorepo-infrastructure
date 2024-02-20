import { useBoolean } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import type { FormAction, FormProps } from '../form/types';
import * as Styled from './styles';
import type { FormDialogProps as Props } from './types';

export const FormDialog = memo(
  ({
    className,
    onSubmit,
    scheme,
    defaultValues,
    submitButtonProps,
    children,
    contentSx,
    actionsSx,
    closeButton,
    defaultOpen,
    debug,
    actionsPrepend,
    state,
    disabled,
    ...dialogProps
  }: Props) => {
    const dialogDefaultState = useBoolean(!!defaultOpen, (v) => {
      if (!v) dialogProps.onClose?.();
    });
    const dialog = state || dialogDefaultState;
    const loading = useBoolean();
    const handleClose = () => {
      dialog.onFalse();
      loading.onFalse();
    };
    const actions: FormAction[] =
      closeButton !== false
        ? [
            {
              children: 'Cancel',
              variant: 'outlined',
              ...closeButton,
              onClick: handleClose,
            },
          ]
        : [];

    const handleSubmit: FormProps['onSubmit'] = (data) =>
      onSubmit?.(data, {
        startProgress: loading.onTrue,
        endProgress: loading.onFalse,
        toggle: handleClose,
      });

    return (
      <Styled.Wrapper
        className={classnames('FormDialog', className)}
        state={dialog}
        loading={loading.value}
        {...dialogProps}
        closeButton={false}
        contentSx={contentSx}
        disabled={disabled}
      >
        <Styled.Form
          scheme={scheme}
          defaultValues={defaultValues}
          actions={actions}
          debug={debug}
          loading={loading.value}
          submitButtonProps={submitButtonProps}
          actionsSx={{ mt: 2, borderColor: 'divider', ...actionsSx }}
          actionsPrepend={actionsPrepend}
          onSubmit={handleSubmit}
        >
          {children}
        </Styled.Form>
      </Styled.Wrapper>
    );
  }
);

FormDialog.displayName = 'FormDialog';
