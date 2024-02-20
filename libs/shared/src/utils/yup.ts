import * as yup from 'yup';

export type YupRule = [RegExp, string];
export type YupFormData<T extends yup.ISchema<any, any>> = yup.InferType<T>;

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{8,})\S+$/;

yup.addMethod(yup.string, 'email', (message = 'Invalid email format') => {
  return yup.string().test('email', message, (value: any) => {
    if (!value) return true;
    return EMAIL_REGEX.test(value);
  });
});

export const PASSWORD_RULE: YupRule = [
  PASSWORD_REGEX,
  'Password must meet the criteria',
];

export default yup;
