import { APP_NAME } from '@myapp/shared/constants';

export function getAppLogoName() {
  return APP_NAME?.toLowerCase();
}

export function getHumanizedAppName() {
  return APP_NAME?.replace('-', ' ').toLowerCase();
}

export function getAppNaturalName() {
  return APP_NAME?.split('-').at(1);
}
