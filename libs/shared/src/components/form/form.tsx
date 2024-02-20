import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { classnames } from '@myapp/shared/utils';
import { isEmpty } from 'lodash-es';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { JsonViewer } from '../json-viewer';
import * as Styled from './styles';
import type { FormProps as Props } from './types';

export const Form = memo(
  ({
    className,
    scheme,
    loading,
    disbaled,
    defaultValues,
    submitButtonProps,
    children,
    debug,
    actions = [],
    actionsSx,
    actionsPrepend,
    onSubmit,
    resetAfterSubmit,
  }: Props) => {
    const methods = useForm({
      resolver: scheme && yupResolver(scheme),
      defaultValues: defaultValues || undefined,
      mode: 'onSubmit',
      reValidateMode: 'onChange',
    });
    if (resetAfterSubmit) methods.watch();
    const { handleSubmit, formState } = methods;
    const isDirty = formState.isDirty || !isEmpty(formState.touchedFields);
    actions = [
      ...actions.map((x) => ({
        ...x,
        disabled: loading || formState.isSubmitting,
      })),
      {
        variant: 'contained',
        color: 'primary',
        children: 'Save',
        ...submitButtonProps,
        ...({ type: 'submit' } as any),
        loading: loading || formState.isSubmitting,
      },
    ];
    const handleSubmitForm = handleSubmit((data) => {
      onSubmit?.(data);
      if (resetAfterSubmit) methods.reset();
    });

    if (debug) console.log('[form]', ((globalThis as any).formState = methods));

    return (
      <Styled.Wrapper
        className={classnames('Form', className)}
        methods={methods}
        onSubmit={handleSubmitForm}
      >
        {debug && (
          <JsonViewer>
            {{
              isValid: formState.isValid,
              isDirty,
              values: methods.getValues(),
              touched: methods.formState.touchedFields,
              errors: methods.formState.errors,
            }}
          </JsonViewer>
        )}

        {children}

        <Styled.Actions sx={actionsSx}>
          {actionsPrepend}
          {actions.map((action, ind) => (
            <LoadingButton key={ind} {...action} disabled={disbaled} />
          ))}
        </Styled.Actions>
      </Styled.Wrapper>
    );
  }
);

Form.displayName = 'Form';
