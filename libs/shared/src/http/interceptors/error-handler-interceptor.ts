import type { AxiosInstance } from 'axios';

export function errorHandlerInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (res) => res,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
  );
}
