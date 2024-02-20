import type { LoadingButtonProps } from '@mui/lab';
import type { ButtonProps } from '@mui/material';
import type { SxStyle } from '@myapp/shared/theme';
import type { PropsWithChildren, ReactNode } from 'react';
import type { ObjectSchema } from 'yup';

export type FormAction = Omit<LoadingButtonProps, 'disabled'>;

export type FormData = Record<string, any>;

export type FormOnSubmit<T extends FormData = any> = (
  data: T
) => Promise<any> | void;

export interface FormProps extends PropsWithChildren {
  className?: string;
  debug?: boolean;
  loading?: boolean;
  disbaled?: boolean;
  scheme?: ObjectSchema<any>;
  defaultValues?: Record<string, any> | null;
  submitButtonProps?: ButtonProps;
  actions?: FormAction[];
  actionsSx?: SxStyle;
  actionsPrepend?: ReactNode;
  onSubmit?: FormOnSubmit;
  resetAfterSubmit?: boolean;
}
