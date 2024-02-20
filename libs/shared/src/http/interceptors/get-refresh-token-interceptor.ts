import { Mutex } from 'async-mutex';
import type { AxiosInstance } from 'axios';
import { getRefereshToken } from '../fetcher/auth-fetcher';

const mutex = new Mutex();

export function getRefreshTokenInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (res) => res,
    async (error) => {
      const { config } = error;
      let { response: result } = error;
      await mutex.waitForUnlock();

      if (result.status === 401) {
        if (!mutex.isLocked()) {
          const release = await mutex.acquire();

          try {
            const token = await getRefereshToken();
            if (token) {
              config.headers = config.headers || {};
              config.headers.Authorization = `Bearer ${token.access_token}`;
              result = await instance(config);
            }
          } finally {
            release();
          }
        } else {
          await mutex.waitForUnlock();
          result = await instance(config);
        }

        return result;
      }

      return Promise.reject(error);
    }
  );
}
