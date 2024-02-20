import { FormDialogConfig, Icon } from '@myapp/shared/components';
import { yup } from '@myapp/shared/utils';
import { PASSWORD_RULE } from '@myapp/shared/utils/yup';

export const icon = <Icon name="edit" />;

const config: FormDialogConfig = {
  title: 'Are you sure you want to change your Password?',
  submitButtonProps: { children: 'Change Password' },
  scheme: yup.object().shape({
    currentPassword: yup.string().required('Current Password  is required'),
    password: yup
      .string()
      .required('Current Password  is required')
      .matches(...PASSWORD_RULE),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  }),
};

export default config;
