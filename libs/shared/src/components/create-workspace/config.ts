import { yup } from '@myapp/shared/utils';
import type { FormDialogConfig } from '../form-dialog';

export const scheme = yup.object().shape({
  name: yup.string().required('Workspace Name is required'),
});

export const config: FormDialogConfig = {
  title: 'Create new workspace',
  headerSx: { pb: 0, minWidth: '300px' },
  scheme,
  submitButtonProps: {
    variant: 'contained',
    color: 'primary',
    children: 'Create',
  },
};
