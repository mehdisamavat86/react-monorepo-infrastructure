import { isValidPhoneNumber as isValidPhoneNumberBase } from 'libphonenumber-js';

export function isValidPhoneNumber(value: string) {
  return isValidPhoneNumberBase(value);
}

export function correctPhoneNumber(value: string) {
  return value.startsWith('00') ? value.replace('00', '+') : value;
}

export function isValidEmail(value: string) {
  return value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
