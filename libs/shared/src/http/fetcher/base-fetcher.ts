import { API_URL } from '@myapp/shared/constants';
import { delay } from '@myapp/shared/utils';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { addAuthTokenInterceptor } from '../interceptors/add-auth-token-interceptor';
import { errorHandlerInterceptor } from '../interceptors/error-handler-interceptor';
import { getRefreshTokenInterceptor } from '../interceptors/get-refresh-token-interceptor';
import type { QueryDelayOptions } from '../types';

const instance = axios.create({ baseURL: API_URL });
addAuthTokenInterceptor(instance);
getRefreshTokenInterceptor(instance);
errorHandlerInterceptor(instance);

export default async (config: AxiosRequestConfig & QueryDelayOptions) => {
  if (config.delay) await delay(config.delay);
  const result = await instance(config);
  return result.data;
};
