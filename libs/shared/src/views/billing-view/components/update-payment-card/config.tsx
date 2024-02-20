import { FormDialogConfig } from '@myapp/shared/components';
import { yup } from '@myapp/shared/utils';
import { Button } from '@mui/material';

const config: FormDialogConfig = {
  title: 'New card',
  uncontrolledElement: <Button variant="outlined">Update</Button>,
  scheme: yup.object().shape({
    name: yup.string().required('Cardholder name is required'),
    date: yup
      .string()
      .matches(/\d{2}\/\d{2}/)
      .required('Date is invalid'),
    cvc: yup.string().matches(/\d{3}/).required('CVC is invalid'),
  }),
  submitButtonProps: {
    variant: 'contained',
    color: 'primary',
  },
};

export default config;
