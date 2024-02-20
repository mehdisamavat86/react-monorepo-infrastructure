import { FormDialogConfig, Icon } from '@myapp/shared/components';
import { yup } from '@myapp/shared/utils';

export const icon = <Icon name="edit" />;

const config: FormDialogConfig = {
  title: 'Are you sure you want to change your email?',
  submitButtonProps: {
    children: 'Transfer Account Ownership',
    variant: 'contained',
    color: 'primary',
  },
  scheme: yup.object().shape({
    transfer: yup.object().shape({
      user: yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        username: yup.string().email().required('Email is required'),
      }),
    }),
    password: yup.string().required('Check your password'),
  }),
};

export default config;
