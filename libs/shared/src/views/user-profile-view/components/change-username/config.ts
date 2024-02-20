import { yup } from '@myapp/shared/utils';

export const config = {
  scheme: yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    attributes: yup.object().shape({
      title: yup.string().required('Title is required'),
    }),
  }),
  submitButtonProps: {
    variant: 'contained',
    color: 'primary',
    children: 'Save',
  },
  actionsSx: { p: 0 },
};
