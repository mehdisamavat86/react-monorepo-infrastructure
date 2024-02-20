import type { UseBoolean } from '@myapp/shared/hooks';
import type { PropsWithChildren } from 'react';
import type { NonUndefined } from 'react-hook-form';
import type { CustomDialogProps } from '../custom-dialog';
import type {
    FormAction,
    FormData,
    FormOnSubmit,
    FormProps,
} from '../form/types';

export type { FormAction as FormDialogAction } from '../form/types';

export interface FormDialogConfig
  extends PropsWithChildren,
    Omit<CustomDialogProps, 'loading' | 'actions' | 'closeButton'>,
    Pick<
      FormProps,
      'debug' | 'scheme' | 'defaultValues' | 'submitButtonProps'
    > {
  closeButton?: false | FormAction;
}

export type FormDialogOnSubmitStatus = {
  startProgress: UseBoolean['onTrue'];
  endProgress: UseBoolean['onFalse'];
  toggle: UseBoolean['onFalse'];
};

export type FormDialogSubmitHandler<T extends FormData = any> = (
  data: Parameters<NonUndefined<FormOnSubmit<T>>>[0],
  dialogState: FormDialogOnSubmitStatus
) => ReturnType<FormOnSubmit>;

export interface FormDialogProps extends PropsWithChildren, FormDialogConfig {
  onSubmit: FormDialogSubmitHandler;
  className?: string;
}
