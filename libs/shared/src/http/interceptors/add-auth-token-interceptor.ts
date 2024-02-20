import type { AxiosInstance } from 'axios';
import { readTokenFromStorage } from '@myapp/shared/auth';

export function addAuthTokenInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use((config) => {
    if (!config.headers.Authorization) {
      const token = readTokenFromStorage();
      if (token) config.headers.Authorization = `Bearer ${token.access_token}`;
    }
    return config;
  });
}
