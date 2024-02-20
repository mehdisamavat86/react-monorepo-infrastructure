import { yup } from '@myapp/shared/utils';

export const schema = yup.object().shape({
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().required('Confirm Password is required'),
});
