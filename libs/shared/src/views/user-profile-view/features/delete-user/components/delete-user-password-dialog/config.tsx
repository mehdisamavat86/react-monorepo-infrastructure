import { FormDialogConfig } from '@myapp/shared/components';
import { yup } from '@myapp/shared/utils';

const config: FormDialogConfig = {
  title: 'Delete Owner Account',
  subTitle: 'We are sorry to see you go 🥲',
  submitButtonProps: {
    children: 'Delete',
    color: 'error',
  },
  scheme: yup.object().shape({
    password: yup.string().required('Password is required'),
  }),
};

export default config;
