import { FormProps } from '@myapp/shared/components';
import { yup } from '@myapp/shared/utils';

export const scheme = yup.object().shape({
  name: yup.string().required('Company is required'),
  address: yup.object().shape({
    line1: yup.string().required('Address is required'),
    postalCode: yup.string().required('Postal Code is required'),
    city: yup.string().required('City is required'),
    country: yup.string().required('Country is required'),
  }),
});

export const config: FormProps = {
  scheme,
  submitButtonProps: {
    variant: 'soft',
    size: 'medium',
    color: 'primary',
  },
};
