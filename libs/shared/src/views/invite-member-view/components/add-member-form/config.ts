import { yup } from '@myapp/shared/utils';
import { EMPTY_MEMBER_DATA } from '../../constants';
import type { AddMemberFormData } from './types';

export const schema = yup.object().shape({
  members: yup.array().of(
    yup.object().shape({
      firstName: yup.string().required('First Name is required'),
      lastName: yup.string().required('Last number is required'),
      username: yup
        .string()
        .email('Email must be a valid email address')
        .required('Email is required'),
      type: yup.string().required('Role is required'),
    })
  ),
});

export const defaultValues: AddMemberFormData = {
  members: [EMPTY_MEMBER_DATA],
};
