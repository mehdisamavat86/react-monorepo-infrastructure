import { FormDialogConfig } from '@myapp/shared/components';
import { yup } from '@myapp/shared/utils';

export const config: FormDialogConfig = {
  title: 'Edit member',
};

export const scheme = yup.object().shape({
  user: yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
  }),
  type: yup.string().required('Role is required'),
});
